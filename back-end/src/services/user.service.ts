import { Injectable } from '@nestjs/common';


import { AddUserDto } from '../dto/user.dto';
import { LoginDto, RegisterDto } from '../dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import Mongoose, { Model } from 'mongoose';
import { AddFollowingDto } from '../dto/following.dto';
import { FollowingDocument, Following } from '../schemas/following.schema';
import { UpdateProfileDto } from '../dto/profile.dto';
import { Chat, ChatDocument } from '../schemas/chat.schema';


const ObjectId = Mongoose.Types.ObjectId;

@Injectable()
export class UserService {
  public constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Following.name)
    private followingModel: Model<FollowingDocument>,
    @InjectModel(Chat.name) private chatModel: Model<ChatDocument>,
  ) {}


  
  public async findOne(id: string){
    return await this.userModel
      .findById(id)
      .populate({
        path: "profileImages",
        options: { sort: { createdAt: -1 } },
      })
      .exec();
  }


  public async findOneWithFollowingAndChat(id: string) {
    const result = await this.userModel
      .aggregate()
      .match({ _id: new ObjectId(id) })
      // .unwind("following")
      .lookup({
        from: "followings",
        let: { following: "$following" },
        pipeline: [
          { $match: { $expr: { $in: ["$_id", "$$following"] } } },
          {
            $lookup: {
              from: "users",
              let: { user: "$user" },
              pipeline: [{ $match: { $expr: { $eq: ["$_id", "$$user"] } } }],
              as: "user",
            },
          },
          { $unwind: "$user" },
        ],
        // localField: "following",
        // foreignField: "_id",
        as: "following",
      })
      .lookup({
        from: "chats",
        let: { chats: "$chats" },
        pipeline: [
          { $match: { $expr: { $in: ["$_id", "$$chats"] } } },
          {
            $lookup: {
              from: "messages",
              let: { messages: "$messages" },
              pipeline: [
                {
                  $addFields: {
                    isMine: {
                      $cond: {
                        if: {
                          $eq: [new ObjectId(id), "$user"],
                        },
                        then: true,
                        else: false,
                      },
                    },
                  },
                },
                { $match: { $expr: { $in: ["$_id", "$$messages"] } } },
                {
                  $lookup: {
                    from: "users",
                    let: { user: "$user" },
                    pipeline: [
                      { $match: { $expr: { $eq: ["$_id", "$$user"] } } },
                    ],
                    as: "user",
                  },
                },
                { $unwind: "$user" },
              ],
              as: "messages",
            },
          },
          {
            $lookup: {
              from: "users",
              let: { users: "$users" },
              pipeline: [{ $match: { $expr: { $in: ["$_id", "$$users"] } } }],
              as: "users",
            },
          },
        ],
        as: "chats",
      })
      // .lookup({
      //   from: "files",
      //   let: { profileImages: "$profileImages" },
      //   pipeline: [{ $match: { $expr: { $in: ["$_id", "$$profileImages"] } } }],
      //   as: "profileImages",
      // })
      .exec();

    return result[0];
  }


  public findUserByEmail(email: string) {
    return this.userModel.findOne({ email: email }).exec();
  }


  public updateOne(id: string, updateProfileDto: UpdateProfileDto){


    let profileImages = {};

    if(updateProfileDto.profileImg){
      profileImages = { profileImages: updateProfileDto.profileImg }
    }

    return this.userModel
      .findByIdAndUpdate(
        id,
        {
          username: updateProfileDto.username,
          stateMessage: updateProfileDto.stateMessage,
          $push: profileImages,
        },
        {
          new: true
        }
      )
      .exec();
  }

  
  
  

  // 채팅방 참여
  public async joinChat(id: any, chatId: any){

    // 채팅방에 사용자 추가
    await this.chatModel
      .findByIdAndUpdate(
        id,
        {
          $push: { users: id },
          //$push: { friends: addFriendDto.friend },
        },
        {
          new: true,
        }
      )
      .exec();

    // 사용자의 채팅방목록에 채팅방 추가
    await this.userModel
      .findByIdAndUpdate(
        id,
        {
          $push: { chats: chatId },
          //$push: { friends: addFriendDto.friend },
        },
        {
          new: true,
        }
      )
      .exec();


      
  }


  // public async findUsers(): Promise<[User]> {
  //   return await this.userDao.getList(3,1);
  // }
  // public async findUser(id: string): Promise<User> {
  //   return await this.userDao.getOne(id);
  // }

  // public async findUsersByEmail(email: string): Promise<User> {
  //   return await this.userDao.getOneByEmail(email);
  // }

  // public async addUser(addUserDto: AddUserDto): Promise<User> {
  //   return await this.userDao.create(addUserDto);
  // }

  // public async deleteUser(id: string) {
  //   await this.userDao.delete(id);
  // }
}