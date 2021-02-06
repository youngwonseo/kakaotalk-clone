import { IsString } from "class-validator";


export class GetProfileDto {
  @IsString()
  readonly username: string;

  @IsString()
  readonly stateMessage: string;

  @IsString()
  readonly profileImg: string;
}

export class UpdateProfileDto {
  
  @IsString()
  readonly username: string;

  @IsString()
  readonly stateMessage: string;

}

