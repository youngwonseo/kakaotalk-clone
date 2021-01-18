import { Injectable } from '@nestjs/common';
import { ChatDao } from '../dao/chat.dao';
import { ChatInterface } from "../database/models/chat.model";
import { AddUserDto } from '../dto/user.dto';
import { UserDao } from '../dao/user.dao';
import { AddChatDto } from '../dto/chat.dto';




@Injectable()
export class ChatService {
  
  public constructor(private chatDao: ChatDao, private userDao: UserDao){}

  public async getChats(id: string): Promise<[any?]> {

    const user = await this.userDao.getOneWithChats(id);
    // const user = await this.userDao.getOne(id);
    // console.log('user', user);
    return user.chats;
  }
  public async listChatByUser(){

  }


  public async addChat(id: string, addChatDto: AddChatDto) {


    const chat = await this.chatDao.create([id, addChatDto.friend]);
    
    console.log('chat', chat);

    return await this.userDao.addChat(id, chat);
  }

  // public async getChat
}