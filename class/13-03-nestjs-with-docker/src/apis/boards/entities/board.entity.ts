import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // 데이터베이스 표를 만드는 작업, typeorm한테 알려줌
@ObjectType() // 그래프큐엘 객체 타입이야!! 라고 말해주는거, gql한테 알려줌
export class Board {
  @PrimaryGeneratedColumn('increment') //uuid는 mongDB에 자동으로 생성됐어 id같은거, increment는 1씩 증가 하는거.
  @Field(() => Int) // gql한테 알려줌
  number: number;

  @Column() // 칼럼형태로 저장한다.
  @Field(() => String) // gql한테 알려줌
  writer: string;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  contents: string;
}
