import { Module } from '@nestjs/common';
import { PerfilclienteService } from './perfilcliente.service';
import { PerfilclienteController } from './perfilcliente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Perfilcliente } from './entities/perfilcliente.entity';
import { Emailcliente } from 'src/emailcliente/entities/emailcliente.entity';
import { EmailclienteModule } from 'src/emailcliente/emailcliente.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Perfilcliente, Emailcliente]),
    EmailclienteModule,
  ],
  controllers: [PerfilclienteController],
  providers: [PerfilclienteService],
  exports: [PerfilclienteService],
})
export class PerfilclienteModule {}
