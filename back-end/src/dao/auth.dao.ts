import { Injectable, Inject} from '@nestjs/common';
import User, { UserInterface } from "../database/models/user.model";
import { LoginDto, RegisterDto } from '../dto/auth.dto';
// import { AddUserDto } from "../dto";




@Injectable()
export class AuthDao {

  constructor(@Inject("USERS") private user: typeof User){}
  
  public login(loginDto: LoginDto): Promise<UserInterface>{
    return this.user.findOne({
      email: loginDto.email,
      hashedPassword: loginDto.password,
    });
  }

  public register(registerDto: RegisterDto): Promise<UserInterface> {

  //   username: string;
  // statusMessage: string;
  // email: string;
  // hashedPassword: string;
  // config: any;
  // createdAt: any;

  
    return this.user.create({...registerDto, hashedPassword: registerDto.password});
  }

}