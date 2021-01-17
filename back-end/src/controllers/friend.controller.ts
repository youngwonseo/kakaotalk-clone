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
  // id는 토큰으로 대체
  @Get("/")
  public async getFriends(){

    const id = "6002f36991667013d2b3d46a";  
    const friends = this.friendService.getFriends(id);
    // const user = await this.userService.findUser(id);
    // return user;
    return friends;
  }

  // 친구추가
  // id는 토큰으로 대체
  @Post("/")
  public async postFriend(@Body() addFriendDto: AddFriendDto) {
    const id = "6002f36991667013d2b3d46a";
    this.friendService.addFriend(id, addFriendDto);
  }


  // 친구 이름 변경
  @Put("/:id")
  public async updateFriend() {

  }



  // 친구 삭제
  @Delete("/:id")
  public async deleteFriend(@Param("id") id: string) {

  }


}