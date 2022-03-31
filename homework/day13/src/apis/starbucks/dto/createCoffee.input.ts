import { Field, Int, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCoffeeInput {
  @Field(() => String)
  menu: string;

  @Field(() => Int)
  price: number;

  @Field(() => Int)
  kcal: number;

  @Field(() => Int)
  saturatedfat: number;

  @Field(() => Int)
  protein: number;

  @Field(() => Int)
  salt: number;

  @Field(() => Int)
  sugars: number;

  @Field(() => Int)
  Caffeine: number;
}
