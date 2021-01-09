import {Module} from "@nestjs/common";
import { UserController } from "../controllers/user";
import { UserService } from "../services/user";
import { UserDao } from "../dao/user"; 
import { usersProviders } from "../database/providers/users";

@Module({
  controllers: [UserController],
  providers: [...usersProviders, UserService, UserDao]
  // providers: [...usersProviders, UserService, UserDao]
})

export class UserModule {}