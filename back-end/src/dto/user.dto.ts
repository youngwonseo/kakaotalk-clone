import { IsString } from "class-validator";

export class AddUserDto {
  
  @IsString()
  readonly username: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly hashedPassword: string;

}


export class UpdateUserDto {
  @IsString()
  readonly username: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly hashedPassword: string;
}
