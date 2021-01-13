import {Module} from "@nestjs/common";
import { UserController } from "../controllers/user.controller";
import { UserService } from "../services/user.service";
import { UserDao } from "../dao/user.dao"; 
import { usersProviders } from "../database/providers/user.provider";

@Module({
  controllers: [UserController],
  providers: [...usersProviders, UserService, UserDao]
  // providers: [...usersProviders, UserService, UserDao]
})

export class UserModule {}