import { Document, Model, model, Types, Schema, Query } from "mongoose"
// import crypto from 'crypto';
// import jwt from 'jsonwebtoken';

// properties, methods
export interface ChatInterface{
  users: any;
  chats: any;   
  createdAt: any;
}


// for mongodb schema
interface ChatBaseDocument extends ChatInterface, Document {}


// static
interface ChatDocument extends ChatBaseDocument {
  // findByUsername(name: string): any;  
}


export interface ChatModel extends Model<ChatDocument> {

}


const ChatSchema = new Schema<ChatDocument, ChatModel>({
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


export default model<ChatDocument, ChatModel>('Chat', ChatSchema);


