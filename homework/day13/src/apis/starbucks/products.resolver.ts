import { CoffeeService } from './products.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Coffee } from './entities/starbucks.entity';
import { CreateCoffeeInput } from './dto/createCoffee.input';

@Resolver()
export class CoffeeResolver {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Query(() => [Coffee])
  fetchStarbucks() {
    return this.coffeeService.findAll();
  }

  @Mutation(() => String)
  createStarbucks(
    // @Args('menu') menu: string,
    // @Args('price') price: number,
    @Args('CreateCoffeeInput') CreateCoffeeInput: CreateCoffeeInput,
  ) {
    // console.log(menu);
    // console.log(price);
    console.log(CreateCoffeeInput);

    return this.coffeeService.create();
  }
}
