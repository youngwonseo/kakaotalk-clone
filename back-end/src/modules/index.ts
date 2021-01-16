import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database.module";

import { AuthModule } from "./auth.module";
import { UserModule } from "./user.module";
import { FriendModule } from "./friend.module";
import { ChatModule } from "./chat.module";

@Module({
  imports: [DatabaseModule, AuthModule, UserModule, FriendModule, ChatModule]
})
export class AppModule {}