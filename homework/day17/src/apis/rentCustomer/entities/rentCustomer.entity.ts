import { Field, ObjectType } from '@nestjs/graphql';
import { Rent } from 'src/apis/rent/entities/rent.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class RentCustomer {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  contents: string;

  @ManyToOne(() => Rent)
  @Field(() => Rent)
  rent: Rent;
}
