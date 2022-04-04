import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Rent } from 'src/apis/rent/entities/rent.entity';

@Entity()
export class RentTrans {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  lists: string;

  @ManyToMany(() => Rent, (rents) => rents.rentTrans)
  rents: Rent[];
}
