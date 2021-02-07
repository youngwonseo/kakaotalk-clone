import {
  Controller, Param, Get, Post, ValidationPipe, UsePipes, Body, Put, Delete, UseGuards, Req
} from '@nestjs/common';

import { validationPipeOptions } from '../validations';
import { AddChatDto } from '../dto/chat.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserService } from '../services/user.service';
import { ChatService } from '../services/chat.service';
import { MessageService } from '../services/message.service';
import { AddMessageDto } from '../dto/message.dto';
// import { AddUserDto, UpdateUserDto } from '../dto/chat';

@Controller("/chats")
export class ChatController {
  public constructor(
    private readonly userService: UserService,
    private readonly chatService: ChatService,
    private readonly messageService: MessageService
  ) {}



  @UseGuards(JwtAuthGuard)
  @Get("/")
  public async getChat(@Req() req: any): Promise<any> {
    return await this.chatService.findAllByUser(req.user.id);
  }

  

  // 채팅방 나오기
  // 남아 있는 사용자가 없으면 삭제
  @UseGuards(JwtAuthGuard)
  @Put("/:id")
  public async putChat(@Param("id") id: string) {

  }
  
  
  
  @UseGuards(JwtAuthGuard)
  @Get("/userid/:id")
  public async getChatByFollow(
    @Req() req: any,
    @Param("id") id: string
  ) {

    // const user = await this.userService.findOne(req.user.id);
    const chats = await this.chatService.findAllByUser(req.user.id);
    //상대방아이디 포함여부로 찾기


    const idx = chats.findIndex((chat: any) => chat.users.map((user:any)=> user._id === id).length > 0);


    console.log(idx);
    if(idx < 0 ){
      return {
        chㅇt: null,
        users: [
          id, // 상대방아이디
          req.user.id // 내아이디
        ]
      };
    }else{
      return {
        chat: chats[idx]._id,
        users: chats[idx].users,
      }
    }
  }




  
}