import { Field, InputType } from '@nestjs/graphql';
// DTO는 데이터 전송 객체/ 네트워크 간에 데이터를 어떤 식으로 보낼지를 정의한 객체
@InputType() // gql에게 이건 inputtype이라고 알려줌
export class CreateBoardInput {
  @Field(() => String)
  writer: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  contents: string;
}
