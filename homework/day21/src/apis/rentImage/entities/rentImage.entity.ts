import { ObjectType, Field } from '@nestjs/graphql';

import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
} from 'typeorm';

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

  @DeleteDateColumn()
  deleted: Date;
}
