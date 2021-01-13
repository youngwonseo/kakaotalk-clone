import { Injectable, Inject} from '@nestjs/common';
import User, { UserModel, UserInterface } from "../database/models/user.model";
import { AddUserDto } from '../dto/user.dto';
// import { AddUserDto } from "../dto";




@Injectable()
export class UserDao {

  constructor(@Inject("USERS") private user: typeof User){}
  
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
    return this.user.findById(id).exec();
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
  
  public addFriend(){

  }

  public delete(id: string){

  }

  

}