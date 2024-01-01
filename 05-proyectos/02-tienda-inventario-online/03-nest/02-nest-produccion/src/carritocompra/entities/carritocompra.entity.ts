import { Pedido } from 'src/pedidos/entities/pedido.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Carritocompra {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('decimal', { default: 0 })
  total: number;

  @Column({ default: '' })
  sessioncarrito: string;

  @OneToMany(() => Pedido, (pedido) => pedido.carritocompra)
  pedidos: Pedido[];
}
