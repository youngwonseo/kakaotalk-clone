import { IsString } from "class-validator";

export class AddFollowingDto {
  
  @IsString()
  readonly username: string;

  @IsString()
  readonly following: string;

}


export class UpdateFollowingDto {

  @IsString()
  readonly username: string;
  
}
