import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database.module";

import { AuthModule } from "./auth.module";
import { UserModule } from "./user.module";
import { FriendModule } from "./friend.module";
import { ChatModule } from "./chat.module";
import { ProfileModule } from "./profile.module";

@Module({
  imports: [DatabaseModule, AuthModule, ProfileModule, UserModule, FriendModule, ChatModule]
})
export class AppModule {}