import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddChatDto } from '../dto/chat.dto';
import { Chat, ChatDocument } from '../schemas/chat.schema';
import { MessageDocument } from '../schemas/message.schema';





@Injectable()
export class ChatService {
  constructor(
    // @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Chat.name) private chatModel: Model<ChatDocument>
  ) {}

  // public constructor(private chatDao: ChatDao, private userDao: UserDao){}

  public async findAll(id: string) {
    // const user = this.userModel.findOne({_id: id}).exec();
    // // const user = await this.userDao.getOne(id);
    // // console.log('user', user);
    // return user.chats;
    
  }

  public async findOne(id: string) {
    return await this.chatModel
      .findOne({ _id: id })
      .populate({ path: "messages" })
      .exec();
  }

  public async create({users} : {users: any[]}) {

    const chat = new this.chatModel({ users: users } );
    return await chat.save();
  }


  public async addMessage(id: string, message: MessageDocument){
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