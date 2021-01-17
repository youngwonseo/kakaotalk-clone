import {Module} from "@nestjs/common";
import { ProfileController } from "../controllers/profile.controller";
import { UserService } from "../services/user.service";
import { UserDao } from "../dao/user.dao"; 
import { usersProviders } from "../database/providers/user.provider";

@Module({
  controllers: [ProfileController],
  providers: [...usersProviders, UserService, UserDao]
  // providers: [...usersProviders, UserService, UserDao]
})

export class ProfileModule {}