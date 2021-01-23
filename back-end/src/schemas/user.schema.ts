import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Following } from "./following.schema";
import { Chat } from "./chat.schema";

export type UserDocument = User & mongoose.Document;

@Schema()
export class User {
  
  @Prop()
  username: String;

  @Prop()
  email: String;

  @Prop()
  hashedPassword: String;

  @Prop()
  stateMessage: String;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Following" }] })
  following: Following[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chat" }] })
  chats: Chat[];

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);


