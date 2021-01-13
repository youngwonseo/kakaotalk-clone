import { Injectable } from '@nestjs/common';
import { ChatDao } from '../dao/chat.dao';
import { ChatInterface } from "../database/models/chat.model";
import { AddUserDto } from '../dto/user.dto';




@Injectable()
export class MessageService {
  
  public constructor(private chatDao: ChatDao){}

}