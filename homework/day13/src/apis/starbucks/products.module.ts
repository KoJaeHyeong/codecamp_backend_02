import { Module } from '@nestjs/common';
import { CoffeeService } from './products.service';
import { CoffeeResolver } from './products.resolver';

@Module({
  // imports: [],
  // controllers: [AppController],
  providers: [CoffeeResolver, CoffeeService],
})
export class BoardModule {}
