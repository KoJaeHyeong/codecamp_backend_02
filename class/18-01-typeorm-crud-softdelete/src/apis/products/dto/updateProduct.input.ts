import {
  Field,
  InputType,
  Int,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { createProductInput } from './createProduct.input';

@InputType() // inputtype으로 쓰기위해서 데코레이터 설정!!
export class updateProductInput extends PartialType(createProductInput) {
  //extends는 상속받겠다.라는 뜻, partialType은 복사하는데 있어도 되고, 없어도 되는 애들을 가져간다.
}

// OmitType :
// PickType : 우리가 원하는 애만 픽해서 가져올 수 있다.
