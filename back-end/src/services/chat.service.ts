import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import Mongoose, { Model } from 'mongoose';
import { AddChatDto } from '../dto/chat.dto';
import { Chat, ChatDocument } from '../schemas/chat.schema';
import { MessageDocument } from '../schemas/message.schema';
import { UserDocument, User } from '../schemas/user.schema';



const ObjectId = Mongoose.Types.ObjectId;

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Chat.name) private chatModel: Model<ChatDocument>
  ) {}



  public async findAllByUser(id: string) {

    
    const result = await this.userModel
      .aggregate()
      .match({ _id: new ObjectId(id) })      
      .lookup({
        from: "chats",
        let: {chats: "$chats"},
        pipeline: [
          { $match: { $expr: { $in: ["$_id", "$$chats"] } } },
          {
            $lookup: {
              from: "messages",
              let: { messages: "$messages" },
              pipeline: [
                { $addFields: {
                  isMine: { 
                    $cond: { 
                      if: { 
                          $eq: [new ObjectId(id), "$user"] 
                      }, 
                      then: true, 
                      else: false 
                  }
                  }
                }},
                { $match: { $expr: { $in: ["$_id", "$$messages"] } } },
                {
                  $lookup: {
                    from: "users",
                    let: { user: "$user" },
                    pipeline: [
                      { $match: { $expr: { $eq: ["$_id", "$$user"] } } },
                    ],
                    as: "user"
                  },
                },
                { $unwind: "$user" }
              ],
              as: "messages"
            },
          },
          {
            $lookup: {
              from: "users",
              let: { users: "$users" },
              pipeline: [
                { $match: { $expr: { $in: ["$_id", "$$users"] } } },
              ],
              as: "users"
            },
          }
        ],
        as: "chats"
      })
      .exec();
    return result[0].chats;
  }



  public async findOne(id: string) {
    return await this.chatModel
      .findOne({ _id: id })
      .populate({ path: "messages" })
      .exec();
  }



  public async saveOne() {
    const chat = new this.chatModel().save();
    return chat;
  }




  public async saveMessage(id: string, message: MessageDocument){
    return await this.chatModel
      .findByIdAndUpdate(
        id,
        {
          $push: { messages: message._id },
          //$push: { friends: addFriendDto.friend },
        },
        {
          new: true,
          populate: "messages"
        }
      )
      .exec();
  }
  
  // public async getChat
}