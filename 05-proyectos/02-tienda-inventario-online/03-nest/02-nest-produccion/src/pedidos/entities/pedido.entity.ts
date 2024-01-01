import { Carritocompra } from 'src/carritocompra/entities/carritocompra.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('jsonb', { nullable: true })
  smartphone: Record<string, any>;

  @Column({ default: 1 })
  cantidad: number;

  @Column('decimal', { default: 0 })
  subtotal: number;

  @ManyToOne(() => Carritocompra, (carritoCompra) => carritoCompra.pedidos)
  carritocompra: Carritocompra;
}
