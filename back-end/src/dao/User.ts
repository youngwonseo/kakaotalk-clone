import { Injectable, Inject} from '@nestjs/common';
import User, { UserModel, UserInterface } from "../database/models/User";
import { AddUserDto } from '../dto/users';
// import { AddUserDto } from "../dto";




@Injectable()
export class UserDao {
  constructor(@Inject("USERS") private user: typeof User){}


  
  public getList(): Promise<[UserInterface]>{
    return this.user.find().exec();
  }

  public getOne(id: number): Promise<UserInterface> {
    //
    return this.user.findById(id).exec();
  }

  public getOneWithFriends() {


  }


  public create(addUserDto: AddUserDto): Promise<UserInterface> {
    console.log(addUserDto);
    return this.user.create(addUserDto);
  }

  public update(addUserDto: AddUserDto): Promise<UserInterface> {
    
    return this.user.findByIdAndUpdate();
  }

  public delete(){

  }

  

}