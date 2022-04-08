import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { createRentHostInput } from './dto/createRentHost.input';
import { RentHost } from './entities/rentHost.entity';
import { RentHostService } from './rentHost.service';
import { updateRentHostInput } from './dto/updateRentHost.input';

@Resolver()
export class RentHostResolver {
  constructor(private readonly rentHostService: RentHostService) {}

  @Query(() => [RentHost])
  fetchRentHosts() {
    return this.rentHostService.findAll();
  }

  @Query(() => [RentHost])
  fetchRentHostsWithdeleted() {
    return this.rentHostService.findAllwithdeleted();
  }

  @Query(() => RentHost)
  fetchRentHost(
    @Args('rentHostId') rentHostId: string, //
  ) {
    return this.rentHostService.findOne({ rentHostId });
  }

  @Mutation(() => RentHost)
  createRentHost(
    @Args('createRentHostInput') createRentHostInput: createRentHostInput, //
  ) {
    return this.rentHostService.create({ createRentHostInput });
  }

  @Mutation(() => RentHost)
  async updateRentHost(
    @Args('rentHostId') rentHostId: string,
    @Args('updateRentHostInput') updateRentHostInput: updateRentHostInput,
  ) {
    return await this.rentHostService.update({ rentHostId, updateRentHostInput });
  }

  @Mutation(() => Boolean)
  deleteRentHost(
    @Args('rentHostId') rentHostId: string, //
  ) {
    return this.rentHostService.delete({ rentHostId });
  }

  @Mutation(() => Boolean)
  restoreOneRentHost(
    @Args('rentHostId') rentHostId: string, //
  ) {
    return this.rentHostService.restoreOne({ rentHostId });
  }
}
