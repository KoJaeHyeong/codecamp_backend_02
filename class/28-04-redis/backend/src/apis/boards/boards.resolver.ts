import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardService } from './boards.service';
import { CreateBoardInput } from './dto/createBoard.input';
import { Board } from './entities/board.entity';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER, Inject } from '@nestjs/common';

@Resolver()
export class BoardResolver {
  constructor(
    private readonly boardService: BoardService, //

    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  @Query(() => [Board])
  fetchBoards() {
    return this.boardService.findAll();
  }

  @Mutation(() => String)
  async createBoard(
    @Args('writer') writer: string,
    @Args('title') title: string,
    @Args('contents') contents: string,
    @Args('createBoardInput') createBoardInput: CreateBoardInput,
  ) {
    // 캐시에 등록하고 조회하는 연습해보기!!!
    await this.cacheManager.set('aaa', createBoardInput, {
      ttl: 0, // 무한으로 저장하고 싶다.
    }); // aaa라는 keyValue에 writer값이 저장됨.

    const mycache = await this.cacheManager.get('aaa'); // aaa에 있는 것을 꺼내와줘~
    console.log(mycache);

    return '캐시 테스트 중!🤪';
    // ============================================

    // 레디스 연습을 위해서 주석 걸기!!
    // console.log(writer);
    // console.log(title);
    // console.log(contents);
    // console.log(createBoardInput);
    // return this.boardService.create();
  }
}
