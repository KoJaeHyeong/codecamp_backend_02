import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { stringify } from 'querystring';
import { createRentUserInput } from './dto/creatRentUser.input';
import { updateRentUserInput } from './dto/updateRentUser.input';
import { RentUser } from './entities/rentUser.entity';
import { RentUserService } from './rentUser.service';
@Resolver()
export class RentUserResolver {
  constructor(
    private readonly rentUserService: RentUserService, //
  ) {}

  @Query(() => [RentUser])
  fetchRentUsers() {
    return this.rentUserService.findAll();
  }

  @Query(() => RentUser)
  fetchRentUser(
    @Args('rentUserId') rentUserId: string, //
  ) {
    return this.rentUserService.findOne({ rentUserId });
  }
  @Mutation(() => RentUser)
  createUser(
    @Args('createUserInput') createRentUserInput: createRentUserInput,
  ) {
    return this.rentUserService.create({ createRentUserInput });
  }

  @Mutation(() => RentUser)
  async updateRent(
    @Args('RentUserId') rentUserId: string,
    @Args('updateRentUserInput') updateRentUserInput: updateRentUserInput,
  ) {
    return await this.rentUserService.update({
      rentUserId,
      updateRentUserInput,
    });
  }

  @Mutation(() => Boolean)
  deleteRentUser(
    @Args('rentUserId') rentUserId: string, //
  ) {
    return this.rentUserService.delete({ rentUserId });
  }
}
