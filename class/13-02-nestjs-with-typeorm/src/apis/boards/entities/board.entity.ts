import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType() // 그래프큐엘 객체 타입이야!! 라고 말해주는거
export class Board {
  @PrimaryGeneratedColumn('increment') //uuid는 mongDB에 자동으로 생성됐어 id같은거, increment는 1씩 증가 하는거.
  @Field(() => Int)
  number: number;

  @Column()
  @Field(() => String)
  writer: string;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  contents: string;
}
