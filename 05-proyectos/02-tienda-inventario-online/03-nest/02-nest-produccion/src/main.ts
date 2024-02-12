import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { jwtConstants } from './auth/constansts';

// import * as express from 'express';
const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: jwtConstants.secret,
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: true,
      },
    }),
  );

  // app.use(express.urlencoded({ extended: true, limit: '10mb' }));
  // app.use(express.json({ limit: '10mb' }));
  app.enableCors({
    origin: true, // Reemplaza con tu dominio de túnel
    methods: 'GET,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(port);
}
bootstrap();
