import { IsString } from "class-validator";

export class AddFollowingDto {
  
  @IsString()
  readonly username: string;

  @IsString()
  readonly user: string;

}


export class UpdateFollowingDto {

  @IsString()
  readonly username: string;
  
}
