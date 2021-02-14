import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database.module";

import { InitModule } from "./init.module";
import { AuthModule } from "./auth.module";
import { ChatModule } from "./chat.module";
import { ProfileModule } from "./profile.module";
import { FollowingModule} from "./following.module";
import { FileModule } from './file.module';
import { JwtStrategy } from "../auth/jwt.strategy";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "../constants";

@Module({
  imports: [    
    DatabaseModule,
    InitModule,
    AuthModule,
    ProfileModule,
    FollowingModule,
    FileModule,
    ChatModule,
  ],
  providers: [JwtStrategy],
  // exports: [JwtModule],
})
export class AppModule {}