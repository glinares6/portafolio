import { Injectable } from '@nestjs/common';
import { CreateEmailclienteDto } from './dto/create-emailcliente.dto';
import { UpdateEmailclienteDto } from './dto/update-emailcliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Emailcliente } from './entities/emailcliente.entity';
import { Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';
import { join } from 'path';

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

    console.log(
      'ruta relativa arr',
      join(process.cwd(), '../emailcliente/templates'),
    );

    console.log('llevado al servidor !!', process.env.EMAIL_NAME);

    //*agregamos los requerimientos de envio

    // const subject = `Welcome to Company: prueba`;

    //*agregamos codigo de verificación (6 digitos)

    const min = Math.ceil(100000);
    const max = Math.floor(999999);
    const resultMathRandom = Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive

    console.log('numero de 6 digitos', resultMathRandom);

    await this.mailerService.sendMail({
      to: createEmailclienteDto.emailcliente,
      subject: `Ventana de verificación para su registro.`,
      template: 'welcome',
      context: {
        name: createEmailclienteDto.emailcliente,
        numrandom: resultMathRandom,
      },
    });

    //*âgregar sesion al servidor
    //*agregar la credential al fetch del cliente para que acepte la sesion
    //*crea la interfaz para validar el codigo de verificación y

    //*en el servidor crea una  nueva ruta para el registro del cliente -> tener en cuenta id,correo,pass,createAt,updateAt,envio(pendiente,despachado,entregado,cancelado),estado,A->N(pedidocliente) , por defecto el pass es vacio

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
