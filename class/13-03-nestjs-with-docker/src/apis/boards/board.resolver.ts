import { BoardService } from './board.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/createBoard.unput';

@Resolver() //어떤 Request를 수신하는지 제어한다.
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Query(() => [Board]) // Query: 등록, gql에게 타입을 알려준다, 배열로 지정
  fetchBoards() {
    return this.boardService.findAll();
  }

  @Mutation(() => String) // Mutation: 수정,삭제
  createBoard(
    @Args('writer') writer: string, // @Args는 gql에 arguments라고 알려준다는 뜻.
    @Args('title') title: string,
    @Args('contents') contents: string,
    @Args('createBoardInput') CreateBoardInput: CreateBoardInput,
  ) {
    console.log(writer);
    console.log(title);
    console.log(contents);
    console.log(CreateBoardInput);

    return this.boardService.create();
  }
}
