import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType() // 그래프큐엘 객체 타입이야!! 라고 말해주는거
export class Coffee {
  @PrimaryGeneratedColumn('increment') //uuid는 mongDB에 자동으로 생성됐어 id같은거, increment는 1씩 증가 하는거.
  @Field(() => String)
  menu: string;

  @Field(() => Int)
  price: number;

  @Field(() => Int)
  kcal: number;

  @Column()
  @Field(() => Int)
  saturatedfat: string;

  @Column()
  @Field(() => Int)
  protein: string;

  @Column()
  @Field(() => Int)
  salt: string;

  @Column()
  @Field(() => Int)
  sugars: string;

  @Column()
  @Field(() => Int)
  Caffeine: string;
}
