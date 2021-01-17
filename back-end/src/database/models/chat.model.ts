import { Document, Model, model, Types, Schema, Query } from "mongoose"
// import crypto from 'crypto';
// import jwt from 'jsonwebtoken';

// properties, methods
export interface ChatInterface extends Document{
  users: any;
  messages: any;
  createdAt: any;
}





export interface ChatModel extends Model<ChatInterface> {

}


const ChatSchema = new Schema<ChatInterface, ChatModel>({
  users: [
    {
      type: String,
      ref: 'User',
    }
  ],
  messages: [
    {
      type: String,
      ref: 'Message',
    }
  ],
  createdAt: { type: Date, default: Date.now },
});


export default model<ChatInterface, ChatModel>('Chat', ChatSchema);


