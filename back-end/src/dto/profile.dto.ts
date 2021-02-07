import { IsString } from "class-validator";


export class ProfileDto {
  constructor({
    __id,
    _email,
    _username,
    _stateMessage,
    _profileImg,
  }: {
    __id: string,
    _email: string,
    _username: string,
    _stateMessage: string,
    _profileImg: string,
  }) {
    this._id = __id;
    this.email = _email;
    this.username = _username;
    this.stateMessage = _stateMessage;
    this.profileImg = _profileImg;
  }

  @IsString()
  readonly _id: string;

  @IsString()
  readonly email: string;

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

