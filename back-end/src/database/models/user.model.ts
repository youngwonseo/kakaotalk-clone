import { Document, Model, model, Types, Schema, Query } from "mongoose";


// import crypto from 'crypto';
// import jwt from 'jsonwebtoken';

// properties, methods
export interface UserInterface{
  username: string;
  statusMessage: string;
  email: string;
  hashedPassword: string;
  config: any;
  createdAt: any;
}


// for mongodb schema
interface UserBaseDocument extends UserInterface, Document {}


// static
interface UserDocument extends UserBaseDocument {
  // findByUsername(name: string): any;  
}


export interface UserModel extends Model<UserDocument> {

}


const UserSchema = new Schema<UserDocument, UserModel>({
  username: String,
  email: String,
  hashedPassword: String,
  
  config: {
    ThemeTone: String,
  },
  createdAt: { type: Date, default: Date.now },
});


UserSchema.methods.setPassword = async function setPassword(password: string) {
  // const hash = crypto.createHash('sha512').update(password).digest('base64');
  // this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function checkPassword(password: string) {
  // const result = this.hashedPassword === crypto.createHash('sha512').update(password).digest('base64');
  // return result;
};

UserSchema.methods.serialize = function serialize() {
  const data = this.toJSON();
  // delete data.hashedPassword;
  return data;
};


UserSchema.methods.generateToken = function generateToken() {
  // const token = jwt.sign(
  //   {
  //     _id: this.id,
  //     username: this.username,
  //     theme: this.theme,
  //   },
  //   '',//process.env.JWT_SECRET,
  //   {
  //     expiresIn: '7d',
  //   },
  // );
  const token = '123';
  return token;
};

UserSchema.methods.setTheme = function setTheme() {

};


UserSchema.statics.findByUsername = function findByUsername(username: string) {
  return this.findOne({ username });
};




export default model<UserDocument, UserModel>('User', UserSchema);


