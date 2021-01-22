import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';
import { Message } from './message.schema';



export type ChatDocument = Chat & mongoose.Document;

@Schema()
export class Chat {
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User"}] })
  users: User[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }] })
  messages: Message[];

  @Prop({ default: Date.now })
  createdAt: Date;
}


export const ChatSchema = SchemaFactory.createForClass(Chat);


