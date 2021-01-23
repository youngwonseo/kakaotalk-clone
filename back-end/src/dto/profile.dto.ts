import { IsString } from "class-validator";

export class UpdateProfileDto {
  
  @IsString()
  readonly username: string;

  @IsString()
  readonly stateMessage: string;

}

