import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardResolver } from './board.resolver';

@Module({
  // imports: [],
  // controllers: [AppController],
  providers: [BoardResolver, BoardService],
})
export class BoardModule {}
