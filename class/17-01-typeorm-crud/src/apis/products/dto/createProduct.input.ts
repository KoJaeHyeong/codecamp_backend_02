import { Field, InputType, Int } from '@nestjs/graphql';

@InputType() // inputtype으로 쓰기위해서 데코레이터 설정!!
export class createProductInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Int)
  price: number;
}
