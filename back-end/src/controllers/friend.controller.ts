import {
  Controller, Param, Get, Post, ValidationPipe, UsePipes, Body, Put, Delete
} from '@nestjs/common';
import { FriendService } from '../services/friend.service';
import Message, { MessageModel, MessageInterface } from "../database/models/message.model";
import { validationPipeOptions } from '../validations';
import { AddFriendDto } from '../dto/friend.dto';
// import { AddUserDto, UpdateUserDto } from '../dto/chat';

@Controller("/friends")
export class FriendController {

  public constructor(private readonly friendService: FriendService) {}

  // 사용자 아이디로 친구 목록 조회
  @Get("/:id")
  public async getFriends(@Param("id") id: string){
    const friends = this.friendService.getFriends(id);
    // const user = await this.userService.findUser(id);
    // return user;
    return friends;
  }

  // 친구추가
  @Post("/:id")
  public async postFriend(@Param("id") id: string, @Body() addFriendDto: AddFriendDto) {
    console.log(id, addFriendDto);
    this.friendService.addFriend(id, addFriendDto);
  }


  // 친구 이름 변경
  @Put("/")
  public async updateFriend() {

  }



  // 친구 삭제
  @Delete("/")
  public async deleteFriend() {

  }


}