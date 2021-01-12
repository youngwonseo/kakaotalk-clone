import { Injectable } from '@nestjs/common';
import { UserDao } from '../dao/User';
import User, { UserModel, UserInterface } from "../database/models/User";



@Injectable()
export class UserService {
  
  public constructor(private userDao: UserDao){}

  public async findUsers(): Promise<[UserInterface]> {
    return await this.userDao.getList();
  }
  public async findUser(id: number): Promise<UserInterface> {
    return await this.userDao.getOne(id);
  }

}