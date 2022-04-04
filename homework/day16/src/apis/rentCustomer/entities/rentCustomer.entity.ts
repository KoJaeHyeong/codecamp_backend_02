import { Rent } from 'src/apis/rent/entities/rent.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RentCustomer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  contents: string;

  @ManyToOne(() => Rent)
  rent: Rent;
}
