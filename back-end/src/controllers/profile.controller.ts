import {
  Controller, Param, Get, Post, Delete, Put, UseGuards, Req, Body, NotFoundException
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { FollowingService } from '../services/following.service';
import { AddFollowingDto, UpdateFollowingDto } from '../dto/following.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateProfileDto, ProfileDto } from '../dto/profile.dto';




@Controller("/profiles")
export class ProfileController {
  public constructor(private readonly userService: UserService) {}

  // 내 프로필 조회
  @UseGuards(JwtAuthGuard)
  @Get("/")
  public async getProfile(@Req() req: any): Promise<any> {
    const profile = await this.userService.findOne(req.user.id);
    return profile;
  }


  // 내 프로필 수정
  @UseGuards(JwtAuthGuard)
  @Put("/")
  public async putProfile(
    @Req() req: any,
    @Body() updatePofileDto: UpdateProfileDto
  ) {

    const profile = await this.userService.updateOne(
      req.user.id,
      updatePofileDto
    );
    console.log(profile);
    return profile;
  }

  // // 내프로필, 친구목록, 채팅목록 포함
  // @UseGuards(JwtAuthGuard)
  // @Get("/:id")
  // public async getProfileById(@Req() req: any, @Param("id") id: string) {
  //   const profile = await this.userService.findOne(id);
  //   return profile;
  // }

  // 친구 추가를 위한 검색
  @UseGuards(JwtAuthGuard)
  @Get("/email/:email")
  public async deleteUser(@Req() req: any, @Param("email") email: string) {
    //: Promise<UserInterface>
    const user = await this.userService.findUserByEmail(email);
    if (!user) {
      throw new NotFoundException("User Not Found");
    }
    return user;
  }
}