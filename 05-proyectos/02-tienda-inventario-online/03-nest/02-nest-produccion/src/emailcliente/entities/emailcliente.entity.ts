import { Perfilcliente } from '../../perfilcliente/entities/perfilcliente.entity';

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Emailcliente {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ unique: true })
  emailcliente: string;

  @Column({ default: '' })
  passcliente: string;

  @Column({ default: '' })
  bufferiv: string;

  @Column({ default: 0 })
  estado: number;

  @Column({ default: 1 })
  sessioncliente: number;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP AT TIME ZONE America/Lima',
  })
  createAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP AT TIME ZONE America/Lima',
  })
  updatedAt: Date;

  @OneToOne(() => Perfilcliente, (perfilcliente) => perfilcliente.emailcliente)
  @JoinColumn()
  perfilcliente: Perfilcliente;
}
