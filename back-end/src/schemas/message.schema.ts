import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';



export type MessageDocument = Message & mongoose.Document;


@Schema()
export class Message {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
  user: User;

  @Prop()
  contents: String;

  @Prop()
  count: Number;

  @Prop({ default: Date.now })
  createdAt: Date;
}


export const MessageSchema = SchemaFactory.createForClass(Message);


