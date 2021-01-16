import { Document, Model, model, Types, Schema, Query } from "mongoose";


// import crypto from 'crypto';
// import jwt from 'jsonwebtoken';

// properties, methods
export interface FriendInterface extends Document{
  username: string;
  friend: string;
}

export interface FriendModel extends Model<FriendInterface> {}

const FriendSchema = new Schema<FriendInterface, FriendModel>({
  username: String,
  friend: 
    {
      type: String,
      ref: "User",
    },
  createdAt: { type: Date, default: Date.now },
});


export default model<FriendInterface, FriendModel>('Friend', FriendSchema);