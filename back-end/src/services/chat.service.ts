import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddChatDto } from '../dto/chat.dto';





@Injectable()
export class ChatService {
  constructor(
    // @InjectModel(User.name) private userModel: Model<UserDocument>,
    // @InjectModel(Chat.name) private chatModel: Model<ChatDocument>
  ) {}

  // public constructor(private chatDao: ChatDao, private userDao: UserDao){}

  public async findAll(id: string) {
    // const user = this.userModel.findOne({_id: id}).exec();
    // // const user = await this.userDao.getOne(id);
    // // console.log('user', user);
    // return user.chats;
    
  }

  public async create(id: string, addChatDto: AddChatDto) {
    // const createdChat = new this.chatModel(addChatDto);
    // return createdChat.save();
  }

  // public async getChat
}