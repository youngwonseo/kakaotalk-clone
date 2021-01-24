import {Module} from "@nestjs/common";
// import { UserController } from "../controllers/profile.controller";
import { UserService } from "../services/user.service";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "../schemas/user.schema";
import { AuthService } from "../services/auth.service";
import { AuthModule } from "./auth.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "../constants";
import { ProfileController } from "../controllers/profile.controller";
import { JwtStrategy } from "../auth/jwt.strategy";
import { Following, FollowingSchema } from "../schemas/following.schema";
import { ChatSchema, Chat } from "../schemas/chat.schema";
import { FollowingService } from "../services/following.service";



@Module({
  imports: [
    AuthModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "9990s" },
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Chat.name, schema: ChatSchema }]),
    MongooseModule.forFeature([
      { name: Following.name, schema: FollowingSchema },
    ]),
  ],
  controllers: [ProfileController],
  providers: [UserService, JwtStrategy, FollowingService],
  // exports: [UserService],
})
export class ProfileModule {}