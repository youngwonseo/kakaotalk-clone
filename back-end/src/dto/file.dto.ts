import { IsString } from "class-validator";

export class AddFileDto {

  @IsString()
  readonly filename: string;

  @IsString()
  readonly originalfilename: string;

  @IsString()
  readonly path: string;
  
}