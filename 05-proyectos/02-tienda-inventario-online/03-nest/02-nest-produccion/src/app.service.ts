import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Pagina de aterrizaje proyecto nextjs / nestjs';
  }
  getPing(res) {
    return res.status(200).json({ message: 'Ping exitoso desde NestJS' });
  }
}
