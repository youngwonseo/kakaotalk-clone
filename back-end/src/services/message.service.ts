import { Injectable } from '@nestjs/common';

// import { ChatInterface } from "../database/schemas/chat.schema";
import { AddUserDto } from '../dto/user.dto';
import { MessageDocument, Message } from '../schemas/message.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddMessageDto } from '../dto/message.dto';




@Injectable()
export class MessageService {
  
  public constructor(@InjectModel(Message.name) private messageModel: Model<MessageDocument>){}

  public async create(addMessageDto: AddMessageDto) {
    // return 
    const message = await new this.messageModel(addMessageDto).save();
    console.log(message);
    return await this.messageModel
      .findOne({ _id: message._id })
      .populate({ path: "user" })
      .exec();
  }

}