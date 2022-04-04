import { Rent } from 'src/apis/rent/entities/rent.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RentImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column()
  isAuth: boolean;

  @ManyToOne(() => Rent)
  rent: Rent;
}
