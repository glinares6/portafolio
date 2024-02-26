import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PerfilclienteService } from './perfilcliente.service';
import { CreatePerfilclienteDto } from './dto/create-perfilcliente.dto';
import { UpdatePerfilclienteDto } from './dto/update-perfilcliente.dto';

@Controller('perfilcliente')
export class PerfilclienteController {
  constructor(private readonly perfilclienteService: PerfilclienteService) {}

  @Post()
  create(@Body() createPerfilclienteDto: CreatePerfilclienteDto) {
    return this.perfilclienteService.create(createPerfilclienteDto);
  }

  @Get()
  findAll() {
    return this.perfilclienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.perfilclienteService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePerfilclienteDto: UpdatePerfilclienteDto,
  ) {
    return this.perfilclienteService.update(+id, updatePerfilclienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.perfilclienteService.remove(+id);
  }
}
