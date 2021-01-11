import { Injectable, Inject} from '@nestjs/common';
import User, { UserModel, UserInterface } from "../database/models/User";
// import { AddUserDto } from "../dto";



// @Injectable()
export class UserDao {
  constructor(@Inject("USERS") private user: typeof User){}

  public getList(): Promise<[UserInterface]>{
    return this.user.find().exec();
  }

  public getById(id: number): Promise<UserInterface> {
    
    //
    return this.user.findById(id).exec();
  }


  public add(addUserDto: AddUserDto): Promise<User> {
    console.log(addUserDto);
    return this.user.create(addUserDto);
  }

  

}