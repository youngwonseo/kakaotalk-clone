import {Module} from "@nestjs/common";
import { FileController } from "../controllers/file.controller";
import { FileService } from "../services/file.service";
import { MongooseModule } from "@nestjs/mongoose";
import { FileSchema, File } from "../schemas/file.schema";
// import { UserController } from "../controllers/profile.controller";



@Module({
  imports: [
    MongooseModule.forFeature([{ name: File.name, schema: FileSchema }]),
  ],
  controllers: [FileController],
  providers: [FileService],
  
})
export class FileModule {}