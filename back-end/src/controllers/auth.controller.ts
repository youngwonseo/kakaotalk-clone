import {
  Controller, Param, Get, Post,  Body, NotFoundException, Req, UseGuards
} from '@nestjs/common';
import { UserService } from '../services/user.service';

import { validationPipeOptions } from '../validations';
import { LoginDto, RegisterDto } from '../dto/auth.dto';
import { AuthService } from '../services/auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';


// 식별자 email ? idx ?

@Controller("/auth")
export class AuthController {
  public constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  /** 로그인 */
  @Post("/login")
  public async login(@Body() loginDto: LoginDto): Promise<any> {
    const result = await this.authService.login(loginDto);

    if (!result) {
      throw new NotFoundException("User Not Found");
    }

    // 디비저장

    return result;
  }

  
  /** 회원가입 */
  @Post("/register")
  public async register(@Body() registerDto: RegisterDto) {
    console.log(registerDto);

    const user = await this.authService.register(registerDto);
    // return user;
  }

  /** 이메일 존재 유무 */
  @Get("/email/:email")
  public async exists(@Param("email") email: string) {
    const user = await this.userService.findUserByEmail(email);
    return user ? true : false;
  }

  /** 로그아웃 */
  @Post("/logout")
  public async logout() {}



  // @Get("/profiles")
  // public async profiles(){
  //   return await this.userService.findAll();
  // }

}