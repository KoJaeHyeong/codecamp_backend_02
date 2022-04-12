import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { createRentScoreInput } from './dto/createRentScore.input';
import { createRentInput } from './dto/createRent.input';
import { updateRentInput } from './dto/updateRent.input';
import { updateRentScoreInput } from './dto/updateRentScore.input';
import { Rent } from './entities/rent.entity';
import { RentService } from './rent.service';

@Resolver()
export class RentResolver {
  constructor(
    private readonly rentService: RentService, //
  ) {}

  @Query(() => [Rent])
  fetchRents() {
    return this.rentService.findAll();
  }

  @Query(() => [Rent])
  fetchRentsWithdeleted() {
    return this.rentService.WithdeletedfindAll();
  }

  @Query(() => Rent)
  fetchRent(
    @Args('rentId') rentId: string, //
  ) {
    return this.rentService.findOne({ rentId });
  }

  @Query(() => Rent)
  fetchRentWithdeleted(
    @Args('rentId') rentId: string, //
  ) {
    return this.rentService.withdeletedfindOne({ rentId });
  }

  @Mutation(() => Rent)
  createRent(
    // 데이터 생성 부분
    @Args('createRentInput') createRentInput: createRentInput,
    @Args('createRentScoreInput') createRentScoreInput: createRentScoreInput,
  ) {
    return this.rentService.create({
      createRentInput,
      createRentScoreInput,
    });
  }

  @Mutation(() => Rent)
  async updateRent(
    @Args('rentId') rentId: string,
    @Args('updateRentInput') updateRentInput: updateRentInput,
    @Args('updateRentScoreInput') updateRentScoreInput: updateRentScoreInput,
  ) {
    return await this.rentService.update({
      rentId,
      updateRentScoreInput,
      updateRentInput,
    });
  }

  @Mutation(() => Boolean)
  deleteRent(
    @Args('rentId') rentId: string, //
  ) {
    return this.rentService.delete({ rentId });
  }

  @Mutation(() => Boolean)
  restoreOneRent(
    @Args('rentId') rentId: string, //
  ) {
    return this.rentService.restoreOne({ rentId });
  }
}
