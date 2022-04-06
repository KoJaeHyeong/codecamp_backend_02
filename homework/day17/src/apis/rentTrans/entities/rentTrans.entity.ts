import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Rent } from 'src/apis/rent/entities/rent.entity';
import { ObjectType, Field } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class RentTrans {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  lists: string;

  @ManyToMany(() => Rent, (rents) => rents.rentTrans)
  @Field(() => Rent)
  rents: Rent[];
}
