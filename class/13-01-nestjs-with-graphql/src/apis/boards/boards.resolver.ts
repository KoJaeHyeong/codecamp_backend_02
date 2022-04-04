import { Query, Resolver } from '@nestjs/graphql';
import { BoardService } from './boards.service';

@Resolver()
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Query(() => String) // graphql의 타입
  getHello(): string { // Typescript 타입
    return this.boardService.aaa();
  }
}
