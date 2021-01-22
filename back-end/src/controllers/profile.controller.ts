import {
  Controller, Param, Get, Post, Delete, Put, UseGuards, Req, Body
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AddFollowingDto } from '../dto/following.dto';



@Controller("/profiles")
export class ProfileController {
  public constructor(
    private readonly userService: UserService,
  ) {}

  // 내프로필, 친구목록, 채팅목록 포함
  @UseGuards(JwtAuthGuard)
  @Get("/")
  public async getProfile(@Req() req: any) {
    console.log(req.user);
    const profile = await this.userService.findOne(req.user.id);
    console.log(profile);
    return profile;
  }

  // 친구 추가를 위한 검색
  @UseGuards(JwtAuthGuard)
  @Get("/email/:email")
  public async deleteUser(@Param("email") email: string) {
    //: Promise<UserInterface>
    const user = this.userService.findUserByEmail(email);
    return user;
  }

  // 친구추가
  // id는 토큰으로 대체
  @UseGuards(JwtAuthGuard)
  @Post("/following")
  public async postFollowing(
    @Req() req: any,
    @Body() addFollowingDto: AddFollowingDto
  ) {
    console.log("add following", addFollowingDto);
    return this.userService.addFollowing(req.user.id, addFollowingDto);
  }

  // 친구 이름 변경
  @UseGuards(JwtAuthGuard)
  @Put("/following/:id")
  public async updateFriend(@Req() req: any) {}

  // 친구 삭제
  @UseGuards(JwtAuthGuard)
  @Delete("/following/:id")
  public async deleteFriend(@Req() req: any, @Param("id") id: string) {}
}