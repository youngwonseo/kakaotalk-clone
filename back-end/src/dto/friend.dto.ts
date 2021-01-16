import { IsString } from "class-validator";

export class AddFriendDto {
  
  @IsString()
  readonly friend: string;

}
