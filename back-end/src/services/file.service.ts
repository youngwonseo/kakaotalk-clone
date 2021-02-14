import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { FileDocument, File } from "../schemas/file.schema";
import { AddFileDto } from "../dto/file.dto";




@Injectable()
export class FileService {
  constructor(
    @InjectModel(File.name) private fileModel: Model<FileDocument>
  ) {}

  public async saveOne(addFileDto: AddFileDto) {
    return await new this.fileModel(addFileDto).save();
  }

}