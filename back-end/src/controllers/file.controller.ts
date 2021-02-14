import { Controller, Post, UploadedFile, UseInterceptors, Get, Param, Res } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { FileService } from "../services/file.service";




@Controller("/files")
export class FileController {

  public constructor(
    private readonly fileService: FileService
  ) {}
  

  @Get('/:filename')
  public async seeUploadedFile(@Param('filename') image: string, @Res() res: any) {
    return res.sendFile(image, { root: './uploads' });
  }



  @Post('/')
  @UseInterceptors(FileInterceptor('file', { dest: "./uploads" }))
  public async uploadFile(@UploadedFile() file: any) {
    //파일 디비 저장
    return await this.fileService.saveOne(file);
  }


}