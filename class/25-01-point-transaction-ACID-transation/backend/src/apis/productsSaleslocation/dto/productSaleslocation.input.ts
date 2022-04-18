import { InputType, OmitType } from '@nestjs/graphql';
import { ProductSaleslocation } from '../entities/productSaleslocation.entity';

@InputType()
export class ProductSaleslocationInput extends OmitType(
  ProductSaleslocation,
  ['id'],
  InputType,
) {
  // 프로덕트스케일로케이션에서 id를 빼고, 인풋타입형태로 받고 싶어요
  //
  //   @Field(() => String)
  //   id: string;
  //
  //   @Field(() => String)
  //   address: string;
  //
  //   @Field(() => String)
  //   addressDetail: string;
  //
  //   @Field(() => Float)
  //   lat: number;
  //
  //   @Field(() => Float)
  //   lng: number;
  //
  //   @Field(() => Date)
  //   meetingTime: Date; // => 이것처럼 모두 적어야 하지만, PickType 또는 OmitType 등을 활용하여 타입을 재사용
  //
  //  myColum: String
}
