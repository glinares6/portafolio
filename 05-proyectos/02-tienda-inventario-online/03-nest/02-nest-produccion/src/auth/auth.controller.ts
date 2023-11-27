import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login/:id')
  create(@Param('id') id: string, @Body() createAuthDto: CreateAuthDto) {
    return this.authService.signAuth(+id, createAuthDto);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }
  @Get('login/all/:id/:token')
  async findOneUser(@Param('id') id: number, @Param('token') token: string) {
    return this.authService.findOneUser(id, token);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
