import { Injectable } from '@nestjs/common';


import { AddUserDto } from '../dto/user.dto';
import { LoginDto, RegisterDto } from '../dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { AddFollowingDto } from '../dto/following.dto';
import { FollowingDocument, Following } from '../schemas/following.schema';
import { UpdateProfileDto } from '../dto/profile.dto';
import { Chat, ChatDocument } from '../schemas/chat.schema';



@Injectable()
export class UserService {
  public constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Following.name)
    private followingModel: Model<FollowingDocument>
  ) {}

  public findOne(id: string) {
    return this.userModel
      .findOne({ _id: id })
      .populate({ path: "following", populate: { path: "user" } })
      .populate({ path: "chats", populate: [{ path: "messages" }, { path: "users" }] })
      .exec();
  }

  public findUserByEmail(email: string) {
    return this.userModel.findOne({ email: email }).exec();
  }

  public updateOne(id: string, updateProfileDto: UpdateProfileDto){
    return this.userModel
      .findByIdAndUpdate(
        id,
        {
          username: updateProfileDto.username,
          stateMessage: updateProfileDto.stateMessage,
        },
        {
          new: true
        }
      )
      .exec();
  }

  public async addFollowing(id: string, addFollowingDto: AddFollowingDto) {
    const following = await this.followingModel.create(addFollowingDto);
    // const user = await this.userModel.findOne({_id: id}).exec();

    return this.userModel
      .findByIdAndUpdate(
        id,
        {
          $push: { following: following._id },
          //$push: { friends: addFriendDto.friend },
        },
        {
          new: true,
        }
      )
      .exec();
  }

  public async addChat(id: string, chat: ChatDocument) {
    return this.userModel
      .findByIdAndUpdate(
        id,
        {
          $push: { chats: chat._id },
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