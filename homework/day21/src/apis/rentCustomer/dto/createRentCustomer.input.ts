import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createRentCustomerInput {
  @Field(() => String)
  contents: string;

  @Field(() => String)
  rentId: string;
}
