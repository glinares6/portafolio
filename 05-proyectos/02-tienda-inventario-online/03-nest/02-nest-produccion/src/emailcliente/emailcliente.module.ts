import { Module } from '@nestjs/common';
import { EmailclienteService } from './emailcliente.service';
import { EmailclienteController } from './emailcliente.controller';
import { MailerModule } from '@nestjs-modules/mailer';

// import { join } from 'path';
// import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Emailcliente } from './entities/emailcliente.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Emailcliente]),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: Number(587),
        secure: false,
        auth: {
          user: `${process.env.EMAIL_NAME}` || 'example@gmail.com',
          pass: `${process.env.EMAIL_PASSWORD}` || 'topSecret',
        },
      },
      defaults: {
        from: '"Tean reply" <glinarese1@gmail.com>',
      },
      template: {
        dir: 'src/mail/templates',
        // adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        adapter: new EjsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [EmailclienteController],
  providers: [EmailclienteService],
  exports: [EmailclienteService],
})
export class EmailclienteModule {}
