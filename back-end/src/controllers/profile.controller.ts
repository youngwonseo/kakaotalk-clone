import {
  Controller, Param, Get, Post, Delete, Put
} from '@nestjs/common';
import { UserService } from '../services/user.service';



@Controller("/profiles")
export class ProfileController {

  public constructor(private readonly userService: UserService) {}
  
  // 친구 추가를 위한 검색
  @Get("/email/:email")
  public async deleteUser(@Param("email") email: string){ //: Promise<UserInterface> 
    // this.userService.deleteUser(id);
    const user = this.userService.findUsersByEmail(email);
    //
    return user;
  }

  
}