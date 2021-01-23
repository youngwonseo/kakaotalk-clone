import { Controller, Get } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "../schemas/user.schema";
import { Model } from "mongoose";
import { Following, FollowingDocument } from "../schemas/following.schema";
import { ChatDocument, Chat } from "../schemas/chat.schema";



@Controller("/init")
export class InitController {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Following.name) private followingModel: Model<FollowingDocument>,
    @InjectModel(Chat.name) private chatModel: Model<ChatDocument>
  ) {}

  @Get()
  public async init() {

    await this.userModel.remove();
    await this.followingModel.remove();
    await this.chatModel.remove();

    return "completed";

  }
}