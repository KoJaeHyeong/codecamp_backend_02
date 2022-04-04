import { Rent } from 'src/apis/rent/entities/rent.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RentLocation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  lists: string;

  @ManyToMany(() => Rent, (rents) => rents.rentLocation)
  rents: Rent[];
}
