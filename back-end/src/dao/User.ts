import { Injectable, Inject} from '@nestjs/common';
import User, { UserModel, UserInterface } from "../database/models/User";
// import { AddUserDto } from "../dto";



// @Injectable()
export class UserDao {
  constructor(@Inject("USERS") private user: typeof User){}

  public getById(id: number): Promise<UserInterface> {
    return this.user.findById(id).exec();
  }
  
  // public add(): Promise<UserInterface> {
  //   console.log(addUserDto);
    
  //   //생성
  //   // return User.
  // }

}