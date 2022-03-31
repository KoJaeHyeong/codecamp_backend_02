import { BoardService } from './board.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/createBoard.unput';

@Resolver()
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Query(() => [Board])
  fetchBoards() {
    return this.boardService.findAll();
  }

  @Mutation(() => String)
  createBoard(
    @Args('writer') writer: string,
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
