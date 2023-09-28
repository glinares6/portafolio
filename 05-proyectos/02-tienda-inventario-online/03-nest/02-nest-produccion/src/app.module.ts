import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmartphoneModule } from './smartphone/smartphone.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Smartphone } from './smartphone/entities/smartphone.entity';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../'),
      renderPath: '/public',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'dpg-ckat5aesmu8c738k4nq0-a',
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'LZ6WrOdDbd8WAL9HtyXe6PBsUc0R7v0m',
      database: process.env.DB_NAME || 'store_online_91sz',
      entities: [Smartphone],
      synchronize: true,
    }),
    SmartphoneModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
