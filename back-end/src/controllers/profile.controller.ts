import {
  Controller, Param, Get, Post, Delete, Put, UseGuards, Req, Body, NotFoundException
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { FollowingService } from '../services/following.service';
import { AddFollowingDto, UpdateFollowingDto } from '../dto/following.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateProfileDto, GetProfileDto } from '../dto/profile.dto';




@Controller("/profiles")
export class ProfileController {
  public constructor(
    private readonly userService: UserService,
    private readonly followingService: FollowingService
  ) {}


  // 내프로필, 친구목록, 채팅목록 포함
  @UseGuards(JwtAuthGuard)
  @Get("/")
  public async getProfile(@Req() req: any): Promise<GetProfileDto> {
    const profile = await this.userService.findOne(req.user.id);
    return profile;
  }

  @UseGuards(JwtAuthGuard)
  @Post("/")
  public async postProfile(
    @Req() req: any,
    @Body() updatePofileDto: UpdateProfileDto
  ) {
    const profile = await this.userService.updateOne(
      req.user.id,
      updatePofileDto
    );
    return profile;
  }

  // 내프로필, 친구목록, 채팅목록 포함
  @UseGuards(JwtAuthGuard)
  @Get("/:id")
  public async getProfileById(@Req() req: any, @Param("id") id: string) {
    const profile = await this.userService.findOne(id);
    return profile;
  }

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

  // 친구추가
  // id는 토큰으로 대체
  @UseGuards(JwtAuthGuard)
  @Post("/following")
  public async postFollowing(
    @Req() req: any,
    @Body() addFollowingDto: AddFollowingDto
  ) {
    console.log("add following", addFollowingDto);
    // 생성후 ?
    const following = await this.userService.addFollowing(
      req.user.id,
      addFollowingDto
    );
    return following;
  }

  // 친구 이름 변경
  // @UseGuards(JwtAuthGuard)
  @Post("/following/:id")
  public async updateFollowing(
    @Req() req: any,
    @Param("id") id: string,
    @Body() updateFollowingDto: UpdateFollowingDto
  ) {
    //follow id
    // await this.userService.updateOne(req.user.id, updatePofileDto);
    // const following = await this.userService.findOne(req.user.id)
    return await this.followingService.updateOne(id, updateFollowingDto);    
  }

  // 친구 삭제
  @UseGuards(JwtAuthGuard)
  @Delete("/following/:id")
  public async deleteFriend(@Req() req: any, @Param("id") id: string) {}
}