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

  async sendVerify(createEmailclienteDto: CreateEmailclienteDto, request) {
    //*ênviamos el correo a su bandeja
    console.log('email desde afuera', createEmailclienteDto.emailcliente);

    console.log(
      'ruta relativa arr',
      join(process.cwd(), '../emailcliente/templates'),
    );
    console.log('llevado desde el servidor !!', process.env.EMAIL_NAME);

    //*agregamos los requerimientos de envio

    // const subject = `Welcome to Company: prueba`;

    //*agregamos codigo de verificación (6 digitos)

    const min = Math.ceil(100000);
    const max = Math.floor(999999);
    const resultMathRandom = Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive

    console.log('numero de 6 digitos', resultMathRandom);

    //*modo prueba
    // request.session.sessionemailclient = resultMathRandom;

    // return { msg: 'mensaje enviado' };

    //*fin modo prueba

    //*âgregar sesion al servidor (validar la condicion si llego el mensaje al cliente)
    request.session.sessionemailclient = resultMathRandom;
    console.log('session agregada emailclient -> ', request.session);

    //*inicio
    try {
      const reqSessionClienteSend = await this.mailerService.sendMail({
        to: createEmailclienteDto.emailcliente,
        subject: `Ventana de verificación para su registro.`,
        template: 'welcome',
        context: {
          name: createEmailclienteDto.emailcliente,
          numrandom: resultMathRandom,
        },
      });

      console.log('framework -> ', reqSessionClienteSend);

      if (reqSessionClienteSend.response.includes('OK')) {
        return { msg: 'mensaje enviado' };
      }
    } catch (error) {
      if (error.responseCode === 535) {
        return {
          msg: 'el servidor no puede enviar mensaje',
        };
      }
    }

    //*fin

    //*crea la interfaz para validar el codigo de verificación ~ hecho
    //*agregar la credential al fetch del cliente para que acepte la sesion

    //*en el servidor crea una  nueva ruta para el registro del cliente -> tener en cuenta id,correo,pass,createAt,updateAt,envio(carritocompra)(pendiente,despachado,entregado,cancelado),estado,A->N(pedidocliente) , por defecto el pass es vacio

    //* no olvidar agregar envio dentro del carrito compra ***

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
  }

  async create(createEmailclienteDto: CreateEmailclienteDto, request) {
    console.log('llego o no al servidor', createEmailclienteDto.emailcliente);

    console.log('capturamos la sesion ???', request.session);

    console.log(
      'muestrame la sessionlocal',
      createEmailclienteDto.sessioncliente,
    );

    //* conparamos la condicion de la sesion para poder regisrtrar

    if (
      createEmailclienteDto.sessioncliente == request.session.sessionemailclient
    ) {
      try {
        console.log('comparativa de la sesion local y la sesion del servidor ');
        return await this.emailClienteRepository.save(createEmailclienteDto);
      } catch (error) {
        if (error.name === 'QueryFailedError') {
          return {
            msg: 'cliente existente - vuelva a registrar',
          };
        } else {
          return {
            msg: 'error inesperado del servidor',
          };
        }
      }
    } else {
      return {
        msg: 'sesion invalida -vuelva a registrar',
      };
    }
  }

  async sendCorreo(createEmailclienteDto: CreateEmailclienteDto, request) {
    console.log(
      'email desde afuera correoVerify',
      createEmailclienteDto.emailcliente,
    );

    //*agregamos codigo de verificación (6 digitos)

    const min = Math.ceil(100000);
    const max = Math.floor(999999);
    const resultMathRandomCorreo = Math.floor(
      Math.random() * (max - min + 1) + min,
    ); // The maximum is inclusive

    console.log('numero de 6 digitos correoVerify', resultMathRandomCorreo);

    //*modo prueba
    // request.session.sessioncorreo = resultMathRandomCorreo;
    // return { msg: 'mensaje enviado' };

    //*inicio
    try {
      const reqSessionClienteSend = await this.mailerService.sendMail({
        to: createEmailclienteDto.emailcliente,
        subject: `Ventana de verificación para el login.`,
        template: 'logincorreo',
        context: {
          nameCorreo: createEmailclienteDto.emailcliente,
          numrandomCorreo: resultMathRandomCorreo,
        },
      });

      console.log('framework -> ', reqSessionClienteSend);

      //*âgregar sesion al servidor (validar la condicion si llego el mensaje al cliente)
      request.session.sessioncorreo = resultMathRandomCorreo;
      console.log('session agregada emailclientCorreo -> ', request.session);

      if (reqSessionClienteSend.response.includes('OK')) {
        return { msg: 'mensaje enviado' };
      }
    } catch (error) {
      if (error.responseCode === 535) {
        return {
          msg: 'el servidor no puede enviar mensaje',
        };
      }
    }

    //*fin
  }

  async loginCorreo(createEmailclienteDto: CreateEmailclienteDto, request) {
    console.log(
      'llego o no al servidor loginCorreo',
      createEmailclienteDto.emailcliente,
    );

    console.log('capturamos la sesion login-correo ???', request.session);

    console.log(
      'capturamos la sesion del input local',
      createEmailclienteDto.sessioncliente,
    );

    //*validar si la sesion coincide

    if (request.session.sessioncorreo == createEmailclienteDto.sessioncliente) {
      return {
        sesionlogincliente: request.session.sessioncorreo,
      };
    } else {
      return {
        msg: 'la sesion no coincide - vuelve a ingresar',
      };
    }
  }

  findAll(request) {
    console.log('respuesta session cliente', request.session);

    return this.emailClienteRepository.find({
      order: {
        id: 'DESC',
      },
    });
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
    return this.emailClienteRepository.delete(id);
  }
}
