import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Emailcliente {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ default: '' })
  emailcliente: string;
}
