import { Module } from "@nestjs/common";
import { ChatGateway } from '../gateway/chat.gateway';
import { ChatController } from "../controllers/chat.controller";
import { ChatService } from "../services/chat.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Chat, ChatSchema } from "../schemas/chat.schema";
import { User, UserSchema } from "../schemas/user.schema";
import { PassportModule } from "@nestjs/passport";
import { AuthModule } from "./auth.module";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "../constants";


@Module({
  imports: [
    AuthModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "9990s" },
    }),
    MongooseModule.forFeature([{ name: Chat.name, schema: ChatSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [ChatController],
  providers: [ChatGateway, ChatService],
})
export class ChatModule {}