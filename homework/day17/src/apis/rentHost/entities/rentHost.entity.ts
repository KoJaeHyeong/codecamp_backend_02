import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class RentHost {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  contents: string;

  @Column({ default: false })
  @Field(() => Boolean)
  isAuth: boolean;

  @Column()
  @Field(() => String)
  question: string;

  @Column()
  @Field(() => Int)
  total_pre: number;

  @Column()
  @Field(() => String)
  host_nick: string;
}
