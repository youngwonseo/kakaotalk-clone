import { Injectable, Inject} from '@nestjs/common';
import User, { UserInterface } from "../database/models/user.model";
import Friend, { FriendInterface } from "../database/models/friend.model";
import { AddUserDto } from '../dto/user.dto';
import { AddFriendDto } from '../dto/friend.dto';
// import { AddUserDto } from "../dto";




@Injectable()
export class UserDao {

  constructor(
    @Inject("USERS") private user: typeof User)
    {}
  
  public getList(size: number, page: number): Promise<[UserInterface]>{
    // this.user.find
    // return this.user.find({},{},{
    //   skip: (size * page - 1),
    //   limit: size
    // }).exec();

    return this.user.find().exec();
  }

  public getOne(id: string): Promise<UserInterface> {
    return this.user.findById(id).exec();
  }

  public getOneWithFriends(id: string): Promise<UserInterface> {
    const friends = this.user.findById(id).populate({ path: 'friends' }).exec();
    return friends;
  }

  public addFriend(id: string, friend: FriendInterface): Promise<UserInterface> {

    //

    
    

    return this.user
      .findByIdAndUpdate(
        id,
        {
          $push: { friends: friend._id },
          //$push: { friends: addFriendDto.friend },
        },
        {
          new: true,
        }
      )
      .exec();
  }

  // search
  public getOneByEmail(email: string): Promise<UserInterface> {
    return this.user.findOne({email: email});
  }

  public create(addUserDto: AddUserDto): Promise<UserInterface> {
    return this.user.create(addUserDto);
  }

  public update(addUserDto: AddUserDto): Promise<UserInterface> {
    return this.user.findByIdAndUpdate();
  }
  
  

  public delete(id: string){
    this.user.remove({_id: id}).exec();
  }

  

}