import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class RentExplain {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  imageUrl: string;

  @Column({ default: false })
  @Field(() => Boolean)
  Exist: boolean;

  @Column()
  @Field(() => String)
  contents: string;

  @DeleteDateColumn()
  deleted: Date;
}
