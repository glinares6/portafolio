import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Session,
} from '@nestjs/common';
import { EmailclienteService } from './emailcliente.service';
import { CreateEmailclienteDto } from './dto/create-emailcliente.dto';
import { UpdateEmailclienteDto } from './dto/update-emailcliente.dto';
import { Request } from 'express';

@Controller('emailcliente')
export class EmailclienteController {
  constructor(private readonly emailclienteService: EmailclienteService) {}

  @Post('send')
  sendVerify(
    @Body() createEmailclienteDto: CreateEmailclienteDto,
    @Req() request: Request,
  ) {
    return this.emailclienteService.sendVerify(createEmailclienteDto, request);
  }

  @Post()
  create(
    @Body() createEmailclienteDto: CreateEmailclienteDto,
    @Req() request: Request,
  ) {
    return this.emailclienteService.create(createEmailclienteDto, request);
  }

  @Post('sendcorreo')
  sendCorreo(
    @Body() createEmailclienteDto: CreateEmailclienteDto,
    @Session() request: Record<string, any>,
  ) {
    return this.emailclienteService.sendCorreo(createEmailclienteDto, request);
  }

  @Post('logincorreo')
  loginCorreo(
    @Body() createEmailclienteDto: CreateEmailclienteDto,
    @Session() request: Record<string, any>,
  ) {
    return this.emailclienteService.loginCorreo(createEmailclienteDto, request);
  }

  @Get()
  findAll(@Req() request: Request) {
    return this.emailclienteService.findAll(request);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emailclienteService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmailclienteDto: UpdateEmailclienteDto,
  ) {
    return this.emailclienteService.update(+id, updateEmailclienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emailclienteService.remove(+id);
  }
}
