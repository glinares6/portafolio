import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    // return 'This action adds a new user';
    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find({
      relations: {
        perfil: true,
      },
      order: {
        id: 'DESC',
      },
    });
  }

  findOne(id: number) {
    // return this.userRepository.find({ where: { id: id } });
    return this.userRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    // return `This action updates a #${id} user`;
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    // return `This action removes a #${id} user`;
    return this.userRepository.delete(id);
  }
}
