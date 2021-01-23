import { IsString } from "class-validator";

export class AddChatDto {

  @IsString()
  readonly users: [string];

  @IsString()
  readonly message: string;
  
}