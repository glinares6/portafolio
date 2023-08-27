import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { PerModule } from './per/per.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [CatsModule, PerModule],
})
export class AppModule {}
