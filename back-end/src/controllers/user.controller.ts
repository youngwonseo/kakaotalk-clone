import {
  Controller, Param, Get, Post, ValidationPipe, UsePipes, Body, Put, Delete
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import User, { UserInterface } from "../database/models/user.model";
import { validationPipeOptions } from '../validations';
import { AddUserDto, UpdateUserDto } from '../dto/user.dto';


// 식별자 email ? idx ?

@Controller("/users")
export class UserController {

  public constructor(private readonly userService: UserService) {}

  @Get("/:id")
  public async getUser(@Param("id") id: string): Promise<UserInterface>{
    const user = await this.userService.findUser(id);
    return user;
  }

  //find one
  @Get("/email/:email")
  public async getUserByEmail(@Param("email") email: string): Promise<UserInterface>{
    const user = await this.userService.findUsersByEmail(email);
    return user;
  }


  @Get("")
  public async getUsers(){
    const users = await this.userService.findUsers();
    return users;
  }


  // @Post("/")
  // @UsePipes(new ValidationPipe(validationPipeOptions.createUser))
  // public async createUser(@Body() addUserDto: AddUserDto): Promise<UserInterface> {
  //   console.log(addUserDto);
  //   //중복체크


  //   //비밀번호


  //   //생성
  //   const createdUser = await this.userService.addUser(addUserDto);
  //   return createdUser;
  // }
  

  // @Put("/:id")
  // @UsePipes(new ValidationPipe(validationPipeOptions.updateUser))
  // public async updateUser(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto){ //: Promise<UserInterface> 

  //   console.log(id, updateUserDto);
  //   return null;
  // }

  // // add friend


  @Delete("/:id")
  @UsePipes(new ValidationPipe(validationPipeOptions.deleteUser))
  public async deleteUser(@Param("id") id: string){ //: Promise<UserInterface> 
    this.userService.deleteUser(id);
    return null;
  }

}