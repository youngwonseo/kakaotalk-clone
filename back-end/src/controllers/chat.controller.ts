import {
  Controller, Param, Get, Post, ValidationPipe, UsePipes, Body, Put, Delete
} from '@nestjs/common';
import { ChatService } from '../services/chat.service';
import Chat, { ChatModel, ChatInterface } from "../database/models/chat.model";
import { validationPipeOptions } from '../validations';
// import { AddUserDto, UpdateUserDto } from '../dto/chat';

@Controller("/users")
export class ChatController {

  // @Get("/:id")
  // public async getUser(@Param("id") id: string): Promise<ChatInterface>{
  //   // const user = await this.userService.findUser(id);
  //   // return user;
  // }


  // add User


  





  @Delete("/:id")
  public async deleteUser(@Param("id") id: string) {

  }


}