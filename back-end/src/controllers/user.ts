import {
  Controller, Param, Get, Post
} from '@nestjs/common';
import { UserService } from '../services/user';
import User, { UserModel, UserInterface } from "../database/models/User";




@Controller("/users")
export class UserController {

  public constructor(private readonly userService: UserService) {}

  @Get("/:id")
  public async getUser(@Param("id") id: number): Promise<UserInterface>{
    const user = await this.userService.findUser(id);
    return user;
  }

  @Get("")
  public async getUsers(){
    const users = await this.userService.findUsers();
    return users;
  }

  @Get("/test")
  public test() {
    
    return "hi";
  }
}