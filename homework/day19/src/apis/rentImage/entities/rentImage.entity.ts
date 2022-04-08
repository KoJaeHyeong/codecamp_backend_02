import { ObjectType, Field } from '@nestjs/graphql';
import { Rent } from 'src/apis/rent/entities/rent.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class RentImage {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  url: string;

  @Column({ default: true })
  @Field(() => Boolean)
  isAuth: boolean;

  @ManyToOne(() => Rent)
  @Field(() => Rent)
  rent: Rent;
}
