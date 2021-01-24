import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Following, FollowingDocument } from '../schemas/following.schema';
import { UpdateProfileDto } from '../dto/profile.dto';
import { UpdateFollowingDto } from '../dto/following.dto';





@Injectable()
export class FollowingService {
  constructor(
    // @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Following.name)
    private followingModel: Model<FollowingDocument>
  ) {}



  public updateOne(id: string, updateFollowingDto: UpdateFollowingDto){
    return this.followingModel
      .findByIdAndUpdate(
        id,
        {
          username: updateFollowingDto.username,
        },
        {
          new: true,
        }
      )
      .exec();
  }



}