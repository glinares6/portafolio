import { Injectable } from '@nestjs/common';
import { CreateCarritocompraDto } from './dto/create-carritocompra.dto';
import { UpdateCarritocompraDto } from './dto/update-carritocompra.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carritocompra } from './entities/carritocompra.entity';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CarritocompraService {
  constructor(
    @InjectRepository(Carritocompra)
    private carritoCompraRepository: Repository<Carritocompra>,
  ) {}
  create(createCarritocompraDto: CreateCarritocompraDto, request) {
    console.log('metodo post');

    const sesionCarritoCompra = uuidv4();

    createCarritocompraDto.sessioncarrito = sesionCarritoCompra;

    request.session.sesioncarritocompra = sesionCarritoCompra;
    console.log('session carrito', request.session.sesioncarritocompra);

    return this.carritoCompraRepository.save(createCarritocompraDto);
  }

  findAll() {
    console.log('metodo get');

    return this.carritoCompraRepository.find({
      relations: {
        pedidos: true,
      },
      order: {
        id: 'DESC',
      },
    });
  }

  findOne(id: number) {
    console.log('metodo getOne');
    return this.carritoCompraRepository.find({
      where: { id: id },
      relations: {
        pedidos: true,
      },
    });
  }
  async findOneSession(session: string) {
    console.log('metodo getOneSession');

    try {
      const result: any = await this.carritoCompraRepository.find({
        where: { sessioncarrito: session },
        relations: {
          pedidos: true,
        },
      });

      if (result[0].sessioncarrito) {
        return result[0];
      }
    } catch (error) {
      if (error) {
        if (error.name === 'TypeError') {
          return {
            msg: 'sesion no encontrada',
          };
        }
      }
    }
  }

  update(id: number, updateCarritocompraDto: UpdateCarritocompraDto) {
    console.log('metodo update');
    return this.carritoCompraRepository.update(id, updateCarritocompraDto);
  }

  remove(id: number) {
    console.log('metodo delete');
    return this.carritoCompraRepository.delete(id);
  }
}
