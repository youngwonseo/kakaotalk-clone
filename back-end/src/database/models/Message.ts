import { Document, Model, model, Types, Schema, Query } from "mongoose"
// import crypto from 'crypto';
// import jwt from 'jsonwebtoken';

// properties, methods
export interface MessageInterface{
  username: string;
  statusMessage: string;
  email: string;
  hashedPassword: string;
  config: any;
  createdAt: any;
}
