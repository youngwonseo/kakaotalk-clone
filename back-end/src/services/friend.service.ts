import { Injectable } from '@nestjs/common';
import { UserDao } from '../dao/user.dao';
import { FriendDao } from '../dao/friend.dao';
import { UserInterface } from "../database/models/user.model";
import { AddUserDto } from '../dto/user.dto';
import { AddFriendDto } from '../dto/friend.dto';



@Injectable()
export class FriendService {
  
  public constructor(private userDao: UserDao, private friendDao: FriendDao){}

  public async getFriends(id: string): Promise<[any?]> {

    const user = await this.userDao.getOneWithFriends(id);
    // const user = await this.userDao.getOne(id);
    // console.log('user', user);
    return user.friends;
  }

  public async addFriend(id: string, addFriendDto: AddFriendDto) {

    const friend = await this.friendDao.create(addFriendDto);
    
    console.log('friend', friend);

    return await this.userDao.addFriend(id, friend);
  }

  // public async findUser(id: string): Promise<UserInterface> {
  //   return await this.userDao.getOne(id);
  // }

  // public async findUsersByEmail(email: string): Promise<UserInterface> {
  //   return await this.userDao.getOneByEmail(email);
  // }

  // public async addUser(addUserDto: AddUserDto): Promise<UserInterface> {
  //   return await this.userDao.create(addUserDto);
  // }

  public async deleteFriend(id: string) {
    await this.friendDao.delete(id);
  }

}