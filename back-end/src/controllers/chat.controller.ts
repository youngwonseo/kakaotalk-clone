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
  @Get("/userid/:userid")
  public async getChatByFollow(
    @Req() req: any,
    @Param("userid") userid: string
  ) {


    console.log("!!")
    // const user = await this.userService.findOne(req.user.id);

    // const chats = user.chats.find((chat: any) => chat.users.include(userid));
    return null;
    //

    // const user = await this.userService.findUser(id);
    // return user;
  }

  // 채팅방 추가
  @UseGuards(JwtAuthGuard)
  @Post("/")
  public async addChat(@Req() req: any, @Body() addChatDto: AddChatDto) {
    // 채팅방 존재하는지 체크
    console.log(addChatDto);

    // 없으면 생성
    const chat = await this.chatService.create(addChatDto);

    // 사용자의 채팅방에 새로운 채팅방 추가
    await this.userService.addChat(req.user.id, chat);
    await this.userService.addChat(addChatDto.users[0], chat);

    // 있으면 바로 반환
    
    // 메세지 추가
    const message = await this.messageService.create({
      user: req.user.id,
      contents: addChatDto.message,
      count: 1,
    });
    

    await this.chatService.addMessage(chat._id, message);

    return chat;
  }

  // 채팅방 삭제 (방에서 나오기)
  @UseGuards(JwtAuthGuard)
  @Delete("/:id")
  public async deleteUser(@Param("id") id: string) {}


  
}