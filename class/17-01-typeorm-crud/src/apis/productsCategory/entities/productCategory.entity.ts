import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // 테이블로 만들어줘
@ObjectType()
export class ProductCategory {
  @PrimaryGeneratedColumn('uuid') // Generated 우리가 따로 안만들어도 알아서 자동으로 만들어 진다.
  @Field(() => String)
  id: string;

  @Column({ unique: true }) // 동일한 이름이 들어오면 에러가 난다
  @Field(() => String)
  name: string;
}
