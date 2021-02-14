import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import Mongoose, { Model } from 'mongoose';
import { Following, FollowingDocument } from '../schemas/following.schema';
import { User, UserDocument } from '../schemas/user.schema';
import { UpdateFollowingDto, AddFollowingDto } from '../dto/following.dto';




const ObjectId = Mongoose.Types.ObjectId;

@Injectable()
export class FollowingService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Following.name)
    private followingModel: Model<FollowingDocument>
  ) {}


  public async findAllByUser(id: string){
    const user = await this.userModel
      .aggregate()
      .match({ _id: new ObjectId(id) })
      .lookup({
        from: "followings",
        let: { following: "$following" },
        pipeline: [
          { $match: { $expr: { $in: ["$_id", "$$following"] } } },
          {
            $lookup: {
              from: "users",
              let: { user: "$user" },
              pipeline: [
                { $match: { $expr: { $eq: ["$_id", "$$user"] } } },
                {
                  $lookup: {
                    from: "files",
                    let: { profileImages: "$profileImages" },
                    pipeline: [
                      {
                        $match: { $expr: { $in: ["$_id", "$$profileImages"] } },
                      },
                      { $sort: { createdAt: -1 } },
                    ],
                    as: "profileImages",
                  },
                },
              ],
              as: "user",
            },
          },
          { $unwind: "$user" },
        ],
        as: "following",
      })
      .exec();
    return user[0].following;
  }


  public async saveOne(id: string, addFollowingDto: AddFollowingDto) {
    const following = await this.followingModel.create(addFollowingDto);
    return this.userModel
      .findByIdAndUpdate(
        id,
        {
          $push: { following: following._id },
        },
        {
          new: true,
        }
      )
      .exec();
  }

  
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


  public deleteOne(id: string, followingId: string){
    
  }

}