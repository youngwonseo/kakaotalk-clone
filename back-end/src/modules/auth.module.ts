import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/auth.service";
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from "@nestjs/passport";
import { jwtConstants } from "../constants";
import { JwtStrategy } from "../auth/jwt.strategy";
import { User, UserSchema } from '../schemas/user.schema';
import { UserService } from '../services/user.service';
import { FollowingSchema, Following } from '../schemas/following.schema';
import { ProfileModule } from './profile.module';


@Module({
  imports: [
    AuthModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "9900s" },
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Following.name, schema: FollowingSchema }])
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, JwtStrategy],
  // exports: [UserService],
})
export class AuthModule {}