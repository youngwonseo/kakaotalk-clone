import { Injectable } from '@nestjs/common';
import { AuthDao } from '../dao/auth.dao';
import { UserInterface } from "../database/models/user.model";
import { AddUserDto } from '../dto/user.dto';
import { LoginDto, RegisterDto } from '../dto/auth.dto';



@Injectable()
export class AuthService {
  
  public constructor(private authDao: AuthDao){}

  //로그인 처리
  public async login(loginDto: LoginDto): Promise<UserInterface> {
    return await this.authDao.login(loginDto);
  }

  // 회원가입
  public async register(registerDto: RegisterDto): Promise<UserInterface> {
    return await this.authDao.register(registerDto);
  }

  

}