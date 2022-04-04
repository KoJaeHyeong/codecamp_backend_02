import { Rent } from 'src/apis/rent/entities/rent.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RentFacility {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  lists: string;

  @ManyToMany(() => Rent, (rent) => rent.rentFacility)
  rents: Rent[];
}
