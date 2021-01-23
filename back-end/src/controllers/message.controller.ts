import {
  Controller, Param, Get, Post, ValidationPipe, UsePipes, Body, Put, Delete
} from '@nestjs/common';
import { MessageService } from '../services/message.service';
// import Message, { MessageModel, MessageInterface } from "../database/schemas/message.model";
import { validationPipeOptions } from '../validations';
// import { AddUserDto, UpdateUserDto } from '../dto/chat';

@Controller("/users")
export class MessageController {

  // @Get("/:id")
  // public async getMessage(@Param("id") id: string): Promise<ChatInterface>{
  //   // const user = await this.userService.findUser(id);
  //   // return user;
  // }
  // add User


  // add Message
  // socket ?
  public async createMessage() {

  }

  
  //socket ?
  public async readMessage() {

  }





  // @Delete("/:id")
  // public async deleteUser(@Param("id") id: string) {

  // }


}