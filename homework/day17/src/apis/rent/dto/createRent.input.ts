import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType() // inputtype으로 쓰기위해서 데코레이터 설정!!
export class createRentInput {
  @Field(() => Float)
  pre_score_clean: number;

  @Field(() => Float)
  pre_score_comu: number;

  @Field(() => Float)
  pre_score_checkin: number;

  @Field(() => Float)
  pre_score_exact: number;

  @Field(() => Float)
  pre_score_location: number;

  @Field(() => Float)
  pre_score_satisfy: number;
}
