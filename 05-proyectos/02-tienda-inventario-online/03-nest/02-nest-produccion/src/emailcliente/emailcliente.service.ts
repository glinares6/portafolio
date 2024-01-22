import { Injectable } from '@nestjs/common';
import { CreateEmailclienteDto } from './dto/create-emailcliente.dto';
import { UpdateEmailclienteDto } from './dto/update-emailcliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Emailcliente } from './entities/emailcliente.entity';
import { Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailclienteService {
  constructor(
    @InjectRepository(Emailcliente)
    private emailClienteRepository: Repository<Emailcliente>,
    private mailerService: MailerService,
  ) {}

  async sendVerify(createEmailclienteDto: CreateEmailclienteDto) {
    //*ênviamos el correo a su bandeja
    console.log('email desde afuera', createEmailclienteDto.emailcliente);

    //*agregamos los requerimientos de envio

    // const subject = `Welcome to Company: prueba`;

    await this.mailerService.sendMail({
      to: createEmailclienteDto.emailcliente,
      subject: `Welcome to Company: prueba`,
      template: './templates/welcome',
      context: {
        name: `datodesdeafuera@mil.com`,
      },
    });

    // await this.mailerService.sendMail({
    //   to: createEmailclienteDto.emailcliente,
    //   // from: '"Support Team" <support@example.com>', // override default from
    //   subject: 'Bienvenido to Nice App! Confirm your Email',
    //   template: './confirmation', // `.hbs` extension is appended automatically
    //   context: {
    //     name: createEmailclienteDto.emailcliente,
    //     url,
    //   },
    // });

    return {
      msg: `emailregistrocliente ${createEmailclienteDto.emailcliente}`,
    };
  }
  create(createEmailclienteDto: CreateEmailclienteDto) {
    return {
      msg: `emailcorreocliente ${createEmailclienteDto.emailcliente}`,
    };
  }

  findAll() {
    return {
      msg: `This action returns all emailcliente`,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} emailcliente`;
  }

  update(id: number, updateEmailclienteDto: UpdateEmailclienteDto) {
    return {
      msg: `This action updates a #${id} emailcliente ${updateEmailclienteDto.emailcliente}`,
    };
  }

  remove(id: number) {
    return `This action removes a #${id} emailcliente`;
  }
}
