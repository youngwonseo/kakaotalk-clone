import {
  Controller, Param, Get, Post, ValidationPipe, UsePipes, Body, Put, Delete, HttpStatus, NotFoundException
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import User, { UserInterface } from "../database/models/user.model";
import { validationPipeOptions } from '../validations';
import { LoginDto, RegisterDto } from '../dto/auth.dto';
import { AuthService } from '../services/auth.service';


// 식별자 email ? idx ?

@Controller("/auth")
export class AuthController {

  public constructor(private readonly authService: AuthService) {}

  @Post("/login")
  public async login(@Body() loginDto: LoginDto): Promise<UserInterface>{
    const user = await this.authService.login(loginDto);

    if(!user){
      throw new NotFoundException('User Not Found');
    }

    return user;
  }

  //find one
  @Post("/register")
  public async register(@Body() registerDto: RegisterDto) {
    console.log(registerDto);
    const user = await this.authService.register(registerDto);
    // return user;
  }

  @Post("/exists")
  public async exists() {

  }

  @Post("/logout")
  public async logout() {

  }

  @Post("/check")
  public async check() {

  }


}