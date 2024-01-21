import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmailclienteService } from './emailcliente.service';
import { CreateEmailclienteDto } from './dto/create-emailcliente.dto';
import { UpdateEmailclienteDto } from './dto/update-emailcliente.dto';

@Controller('emailcliente')
export class EmailclienteController {
  constructor(private readonly emailclienteService: EmailclienteService) {}

  @Post('send')
  sendVerify(@Body() createEmailclienteDto: CreateEmailclienteDto) {
    return this.emailclienteService.sendVerify(createEmailclienteDto);
  }
  @Post()
  create(@Body() createEmailclienteDto: CreateEmailclienteDto) {
    return this.emailclienteService.create(createEmailclienteDto);
  }

  @Get()
  findAll() {
    return this.emailclienteService.findAll();
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
