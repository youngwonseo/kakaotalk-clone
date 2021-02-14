import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';
import { Message } from './message.schema';



export type FileDocument = File & mongoose.Document;

@Schema()
export class File {
  @Prop()
  originalname: String;

  @Prop()
  filename: String;

  @Prop()
  path: String;

  @Prop({ default: Date.now })
  createdAt: Date;
}


export const FileSchema = SchemaFactory.createForClass(File);


