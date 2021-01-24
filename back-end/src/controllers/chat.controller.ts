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
  public async getList(@Req() req: any) {
    const user = await this.userService.findOne(req.user.id);
    return user.chats;
  }

  @UseGuards(JwtAuthGuard)
  @Get("/")
  public async getChat(@Param("id") id: string) {
    // const user = await this.userService.findUser(id);
    // return user;
  }
  
  
  @UseGuards(JwtAuthGuard)
  @Get("/userid/:id")
  public async getChatByFollow(
    @Req() req: any,
    @Param("id") id: string
  ) {


    const user = await this.userService.findOne(req.user.id);

    //상대방아이디 포함여부로 찾기
    const idx = user.chats.findIndex((chat: any) => chat.users.indexOf(id) > 0);
    console.log(idx);
    if(idx < 0 ){
      return {
        users: [
          id, // 상대방아이디
          req.user.id // 내아이디
        ]
      };
    }else{
      return {
        chat: user.chats[idx]._id,
        users: user.chats[idx].users,
      }
    }
  }




  // 채팅방 삭제 (방에서 나오기)
  @UseGuards(JwtAuthGuard)
  @Delete("/:id")
  public async deleteUser(@Param("id") id: string) {}


  
}