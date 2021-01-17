import {
  Controller, Param, Get, Post, ValidationPipe, UsePipes, Body, Put, Delete
} from '@nestjs/common';
import { ChatService } from '../services/chat.service';
import Chat, { ChatModel, ChatInterface } from "../database/models/chat.model";
import { validationPipeOptions } from '../validations';
import { AddChatDto } from '../dto/chat.dto';
// import { AddUserDto, UpdateUserDto } from '../dto/chat';

@Controller("/chats")
export class ChatController {

  public constructor(private readonly chatService: ChatService) {}

  @Get("/")
  public async getList() {
    
    const id = "6002f36991667013d2b3d46a";  
    const chats = this.chatService.getChats(id);
    // const user = await this.userService.findUser(id);
    // return user;
    return chats;
  }


  public async getChat(@Param("id") id: string) {
    // const user = await this.userService.findUser(id);
    // return user;

  }


  // add chat
  @Post("/")
  public async addChat(@Body() addChatDto: AddChatDto) {
    const id = "6002f36991667013d2b3d46a";  
    console.log(id, addChatDto);
  }
  
  





  @Delete("/:id")
  public async deleteUser(@Param("id") id: string) {

  }


}