import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { RentCustomerService } from './rentCustomer.service';
import { RentCustomer } from './entities/rentCustomer.entity';
import { createRentCustomerInput } from './dto/createRentCustomer.input';

@Resolver()
export class RentCustomerResolver {
  constructor(
    private readonly rentCustomerService: RentCustomerService, //
  ) {}

  @Query(() => [RentCustomer])
  fetchCustomers() {
    return this.rentCustomerService.findAll();
  }

  @Query(() => RentCustomer)
  fetchCustomer(
    @Args('rentCustomerId') rentCustomerId: string, //}
  ) {
    return this.rentCustomerService.findOne({ rentCustomerId });
  }

  @Mutation(() => RentCustomer)
  createRentCustomer(
    @Args('createRentCustomerInput')
    createRentCustomerInput: createRentCustomerInput,
  ) {
    return this.rentCustomerService.create({ createRentCustomerInput });
  }
}
