import { Injectable } from '@nestjs/common';
import { CreatePerfilclienteDto } from './dto/create-perfilcliente.dto';
import { UpdatePerfilclienteDto } from './dto/update-perfilcliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Perfilcliente } from './entities/perfilcliente.entity';
import { Emailcliente } from 'src/emailcliente/entities/emailcliente.entity';

@Injectable()
export class PerfilclienteService {
  constructor(
    @InjectRepository(Perfilcliente)
    private perfilClienteRepository: Repository<Perfilcliente>,
    @InjectRepository(Emailcliente)
    private emailClienteRepository: Repository<Emailcliente>,
  ) {}
  async create(createPerfilclienteDto: CreatePerfilclienteDto) {
    console.log(
      'dateando loas valores si pasan',
      createPerfilclienteDto.correoLoginCliente,
    );

    //* validar si el correo y la session coinciden

    try {
      //* del correo tomas el id

      const emailClienteData = await this.emailClienteRepository.find({
        where: {
          emailcliente: createPerfilclienteDto.correoLoginCliente,
        },
        relations: {
          perfilcliente: true,
        },
      });

      if (emailClienteData.length > 0) {
        if (
          emailClienteData[0].sessioncliente ==
          createPerfilclienteDto.sessionCorreoLoginCliente
        ) {
          //* para agregar el perfilcliente al emailcliente ~ viceverza
          const emailCLienteRes = await this.emailClienteRepository.findOneBy({
            id: emailClienteData[0].id,
          });

          if (emailClienteData[0].perfilcliente == null) {
            //* guarda el perfilcliente y lo muestra en emailcliente

            const perfilCliente = await this.perfilClienteRepository.create(
              createPerfilclienteDto,
            );
            perfilCliente.emailcliente = emailCLienteRes;
            await this.perfilClienteRepository.save(perfilCliente);

            return {
              msg: 'registro el perfilcliente',
            };
          }

          //* actualiza el perfilcliente
          await this.perfilClienteRepository.update(
            emailClienteData[0].perfilcliente.id,
            {
              nombre: createPerfilclienteDto.nombre,
              apellido1: createPerfilclienteDto.apellido1,
              apellido2: createPerfilclienteDto.apellido2,
              direccion: createPerfilclienteDto.direccion,
              telefono: createPerfilclienteDto.telefono,
              genero: createPerfilclienteDto.genero,
              fecha: createPerfilclienteDto.fecha,
            },
          );

          console.log('eee', emailClienteData[0].perfilcliente.id);

          return {
            msg: 'actualizo el  perfilcliente',
          };
        } else {
          return {
            msg: 'no esta autorizado a registrar perfilcliente',
          };
        }
      }

      return {
        msg: 'no existe usuario en registro',
      };
    } catch (error) {
      console.log(error);

      return {
        msg: 'error al autozar el registro del perfilcliente',
      };
    }
  }

  findAll() {
    return this.perfilClienteRepository.find({
      order: {
        id: 'DESC',
      },
      relations: {
        emailcliente: true,
      },
    });
  }

  findOne(id: number) {
    return this.perfilClienteRepository.find({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updatePerfilclienteDto: UpdatePerfilclienteDto) {
    return this.perfilClienteRepository.update(id, updatePerfilclienteDto);
  }

  remove(id: number) {
    return this.perfilClienteRepository.delete(id);
  }
}
