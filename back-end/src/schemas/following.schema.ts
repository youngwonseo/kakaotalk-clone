import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';


export type FollowingDocument = Following & mongoose.Document;

@Schema()
export class Following {
  @Prop()
  username: String;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
  user: User;

  @Prop({ default: Date.now })
  createdAt: Date;
};

export const FollowingSchema = SchemaFactory.createForClass(Following);