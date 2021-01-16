import { Injectable } from '@nestjs/common';
import { UserDao } from '../dao/user.dao';
import { UserInterface } from "../database/models/user.model";
import { AddUserDto } from '../dto/user.dto';



@Injectable()
export class UserService {
  
  public constructor(private userDao: UserDao){}

  public async findUsers(): Promise<[UserInterface]> {
    return await this.userDao.getList(3,1);
  }
  public async findUser(id: string): Promise<UserInterface> {
    return await this.userDao.getOne(id);
  }

  public async findUsersByEmail(email: string): Promise<UserInterface> {
    return await this.userDao.getOneByEmail(email);
  }

  public async addUser(addUserDto: AddUserDto): Promise<UserInterface> {
    return await this.userDao.create(addUserDto);
  }

  public async deleteUser(id: string) {
    await this.userDao.delete(id);
  }

}