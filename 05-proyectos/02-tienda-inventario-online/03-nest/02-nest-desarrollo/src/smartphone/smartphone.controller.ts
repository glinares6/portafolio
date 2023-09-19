import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { SmartphoneService } from './smartphone.service';
import { CreateSmartphoneDto } from './dto/create-smartphone.dto';
import { UpdateSmartphoneDto } from './dto/update-smartphone.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

import * as fs from 'fs';
import { Response } from 'express';
import * as path from 'path';
@Controller('smartphone')
export class SmartphoneController {
  constructor(private readonly smartphoneService: SmartphoneService) {}

  @Post()
  create(@Body() createSmartphoneDto: CreateSmartphoneDto) {
    return this.smartphoneService.create(createSmartphoneDto);
  }
  @Post('file')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'public/img',
        filename: (req, file, cb) => {
          // const uniqueSuffix =
          //   Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `${file.originalname}`);
        },
      }),
    }),
  )
  createWriteFile(
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
  ) {
    // return this.smartphoneService.create(createSmartphoneDto);
    console.log(file);
    if (file) {
      const filePath = path.join(__dirname, `../../${file.path}`);

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader(
        'Content-Disposition',
        `attachment; filename=${file.originalname}`,
      );

      res.sendFile(filePath);
    } else {
      console.log('demoro en el envio del archivo');
    }
    return {
      statusCode: 200,
      data: 'archivo subido correctamente',
    };
  }

  @Get()
  findAll() {
    return this.smartphoneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.smartphoneService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSmartphoneDto: UpdateSmartphoneDto,
  ) {
    return this.smartphoneService.update(+id, updateSmartphoneDto);
  }

  //* solo si el elemento existe
  @Patch(':id/file')
  @UseInterceptors(FileInterceptor('file'))
  async patchFileTest(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const removeFile = (msg) =>
      new Promise((resolve, reject) => {
        if (fs.existsSync(`./public/img/${id}.mp3`)) {
          resolve(fs.unlinkSync(`./public/img/${id}.mp3`));
          console.log(msg);
        }
        reject(`ǹo hay elemento - test`);
      });

    const upFile = (msg, file) =>
      new Promise((resolve) => {
        resolve(fs.writeFileSync(`./public/img/${id}.mp3`, file.buffer));
        console.log(msg);
      });

    try {
      await removeFile('se elimino').catch((err) => console.log(err));
      await upFile('se actualizo', file);
      return {
        data: file.originalname,
      };
    } catch (error) {
      throw error;
    }
  }

  //* solo si el elemento existe
  @Patch(':id/filetest')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'public/img',
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    }),
  )
  async patchFileprueba(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const removeFile = (msg) =>
      //* consulta a la BD de url de la imagen y ponerlo en el ID
      new Promise((resolve, reject) => {
        if (fs.existsSync(`./public/img/${id}.mp3`)) {
          resolve(fs.unlinkSync(`./public/img/${id}.mp3`));
          console.log(msg);
        }
        reject('no hay elemento');
      });

    await removeFile('se elimino').catch((err) => console.log(err));
    return {
      data: file.originalname,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.smartphoneService.remove(+id);
  }
  @Delete(':id/file')
  removeFile(@Param('id') id: string) {
    if (fs.existsSync(`./public/img/${id}.mp3`)) {
      fs.unlinkSync(`./public/img/${id}.mp3`);
      console.log('envio');
    } else {
      console.log('no se elimino');
    }
  }
}

//todo test
// @Patch(':id/file')
// removeFileTest(@Param('id') id: string) {
//   console.log('enviar datos PATCH-FILE', id);
// }
