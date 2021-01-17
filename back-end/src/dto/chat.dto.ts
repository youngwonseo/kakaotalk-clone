import { IsString } from "class-validator";

export class AddChatDto {

  @IsString()
  readonly friend: string;

}