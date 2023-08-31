import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}
  create(body: CreateClienteDto) {
    return this.clienteRepository.save(body);
  }

  findAll() {
    return this.clienteRepository.find({ relations: { photos: true } });
  }

  findOne(id: number) {
    return this.clienteRepository.find({
      relations: { photos: true },
      where: { id: id },
    });
  }

  update(id: number, body: UpdateClienteDto) {
    return this.clienteRepository.update(id, body);
  }

  remove(id: number) {
    return this.clienteRepository.delete(id);
  }
}
