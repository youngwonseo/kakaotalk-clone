import { Document, Model, model, Types, Schema, Query } from "mongoose"
// import crypto from 'crypto';
// import jwt from 'jsonwebtoken';
import { UserInterface } from './user.model';

// properties, methods
export interface MessageInterface{
  user: UserInterface;
  contents: string;
  count: number;
  createdAt: any;
}

//파일일경우

// for mongodb schema
interface MessageBaseDocument extends MessageInterface, Document {}


// static
interface MessageDocument extends MessageBaseDocument {
  // findByUsername(name: string): any;  
}


export interface MessageModel extends Model<MessageDocument> {

}


const MessageSchema = new Schema<MessageDocument, MessageModel>({
  user: {
    type: String,
    ref: 'User',
  },
  contents: String,
  count: Number,
  createdAt: { type: Date, default: Date.now },
});


export default model<MessageDocument, MessageModel>('Chat', MessageSchema);


