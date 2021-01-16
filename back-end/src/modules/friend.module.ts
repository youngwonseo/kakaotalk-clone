import {Module} from "@nestjs/common";
import { FriendController } from "../controllers/friend.controller";
import { FriendService } from "../services/friend.service";
import { UserDao } from "../dao/user.dao"; 
import { friendProviders } from "../database/providers/friend.provider";
import { usersProviders } from "../database/providers/user.provider";
import { FriendDao } from "../dao/friend.dao";

@Module({
  controllers: [FriendController],
  providers: [...friendProviders, ...usersProviders, FriendService, UserDao, FriendDao]
  // providers: [...usersProviders, UserService, UserDao]
})

export class FriendModule {}