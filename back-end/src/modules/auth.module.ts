import {Module} from "@nestjs/common";
import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/auth.service";
import { AuthDao } from "../dao/auth.dao"; 
import { authProviders } from "../database/providers/auth.provider";

@Module({
  controllers: [AuthController],
  providers: [...authProviders, AuthService, AuthDao]
})

export class AuthModule {}