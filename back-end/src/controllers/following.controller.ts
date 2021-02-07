

import {
  Controller, Param, Get, Post, Delete, Put, UseGuards, Req, Body, NotFoundException
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { FollowingService } from '../services/following.service';
import { AddFollowingDto, UpdateFollowingDto } from '../dto/following.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateProfileDto, ProfileDto } from '../dto/profile.dto';




@Controller("/following")
export class FollowingController {
  public constructor(
    private readonly userService: UserService,
    private readonly followingService: FollowingService
  ) {}

  // following list
  @UseGuards(JwtAuthGuard)
  @Get("/")
  public async getFollowing(@Req() req: any): Promise<any> {
    return await this.followingService.findAllByUser(req.user.id);
  }


  @UseGuards(JwtAuthGuard)
  @Post("/")
  public async postFollowing(
    @Req() req: any,
    @Body() addFollowingDto: AddFollowingDto
  ) {
    const following = await this.followingService.saveOne(
      req.user.id,
      addFollowingDto
    );
    return following;
  }

  
  @UseGuards(JwtAuthGuard)
  @Put("/:id")
  public async updateFollowing(
    @Req() req: any,
    @Param("id") id: string,
    @Body() updateFollowingDto: UpdateFollowingDto
  ) {
    return await this.followingService.updateOne(id, updateFollowingDto);
  }


  @UseGuards(JwtAuthGuard)
  @Delete("/:id")
  public async deleteFriend(@Req() req: any, @Param("id") id: string) {
    return await this.followingService.deleteOne(req.user.id, id);
  }
}