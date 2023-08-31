import { Photo } from 'src/photo/entities/photo.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('cliente')
export class Cliente {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Photo, (photo) => photo.cliente)
  photos: Photo[];
}
