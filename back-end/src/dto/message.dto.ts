import { IsString, IsNumber } from "class-validator";
import { User } from "../schemas/user.schema";

export class AddMessageDto {
  
  @IsString()
  readonly user: string;

  @IsString()
  readonly contents: string;

  @IsNumber()
  readonly count: number;
}
