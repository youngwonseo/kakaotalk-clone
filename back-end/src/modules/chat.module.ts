import {Module} from "@nestjs/common";
import { ChatGateway } from '../gateway/chat.gateway';
import { ChatController } from "../controllers/chat.controller";
import { chatProviders } from '../database/providers/chat.provider';
import { ChatService } from "../services/chat.service";
import { ChatDao } from "../dao/chat.dao";
import { UserDao } from "../dao/user.dao";
import { usersProviders } from "../database/providers/user.provider";

@Module({
  controllers: [ChatController],
  providers: [ChatGateway, ...chatProviders, ...usersProviders, ChatService, UserDao, ChatDao],
})
export class ChatModule {}