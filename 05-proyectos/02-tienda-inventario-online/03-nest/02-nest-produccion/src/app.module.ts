import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmartphoneModule } from './smartphone/smartphone.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Smartphone } from './smartphone/entities/smartphone.entity';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { join } from 'path';
import { ScheduleModule } from '@nestjs/schedule';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { PerfilModule } from './perfil/perfil.module';
import { Perfil } from './perfil/entities/perfil.entity';
import { AuthModule } from './auth/auth.module';
import { Auth } from './auth/entities/auth.entity';
import { LoggerMiddleware } from './common/midleware/logger.midleware';
import { SesionModule } from './sesion/sesion.module';
import { Sesion } from './sesion/entities/sesion.entity';

import * as session from 'express-session';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../'),
      renderPath: '/public',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      // host: process.env.POSTGRES_HOST || 'localhost',
      // port: parseInt(process.env.POSTGRES_PORT || '5432'),
      // username: process.env.POSTGRES_USER || 'devgtp',
      // password: process.env.POSTGRES_PASSWORD || 'family',
      // database: process.env.POSTGRES_DB || 'nestbuild',
      url:
        process.env.POSTGRES_URL ||
        'postgres://devgtp:family@localhost:5432/nestbuild',
      entities: [Smartphone, User, Perfil, Auth, Sesion],
      synchronize: true,
    }),
    ScheduleModule.forRoot(),
    SmartphoneModule,
    UsersModule,
    PerfilModule,
    AuthModule,
    SesionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(private dataSource: DataSource) {}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'auth/login/all/*', method: RequestMethod.GET });
    consumer.apply(session({ secret: 'keyboardcat' })).forRoutes('*');
  }
}
