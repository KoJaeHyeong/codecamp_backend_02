import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RentHost {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  contents: string;

  @Column()
  isAuth: boolean;

  @Column()
  question: string;

  @Column()
  total_pre: number;

  @Column()
  host_nick: string;
}
