import { Module } from '@nestjs/common';
import { SmartphoneService } from './smartphone.service';
import { SmartphoneController } from './smartphone.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Smartphone } from './entities/smartphone.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Smartphone])],
  controllers: [SmartphoneController],
  providers: [SmartphoneService],
})
export class SmartphoneModule {}
