import { Injectable } from '@nestjs/common';


import { AddUserDto } from '../dto/user.dto';
import { LoginDto, RegisterDto } from '../dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { Model } from 'mongoose';




@Injectable()
export class AuthService {
  public constructor(
    private jwtService: JwtService,
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {}

  //로그인 처리
  public async login(loginDto: LoginDto) {
    // 로그인
    const user =  await this.userModel.findOne({email: loginDto.email}).exec();
    if(!user) {
      return null;
    }
    const payload = { sub: user._id, email: user.email, username: user.username };
    return {
      access_token : this.jwtService.sign(payload)
    };
  }

  // 회원가입
  public async register(registerDto: RegisterDto) {
    // return 
    return await new this.userModel({
      username: registerDto.username,
      email: registerDto.email,
      hashedPassword: registerDto.password,
    }).save();
  }
}