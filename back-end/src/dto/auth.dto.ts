import { IsString } from "class-validator";

export class LoginDto {
  
  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;

}


export class RegisterDto {

  @IsString()
  readonly profileImg: string = '/profile-default.png';

  @IsString()
  readonly stateMessage: string = '';

  @IsString()
  readonly username: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;

}