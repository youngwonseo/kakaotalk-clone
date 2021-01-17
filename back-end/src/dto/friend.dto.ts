import { IsString } from "class-validator";

export class AddFriendDto {
  
  @IsString()
  readonly username: string;

  @IsString()
  readonly friend: string;

}


export class UpdateFriendDto {

  @IsString()
  readonly username: string;
  
}
