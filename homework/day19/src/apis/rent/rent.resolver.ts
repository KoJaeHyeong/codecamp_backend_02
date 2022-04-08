import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { createRentInput } from './dto/createRent.input';
import { Rent } from './entities/rent.entity';
import { RentService } from './rent.service';
import { updateRentInput } from './dto/updateRent.input';

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
    return this.rentService.findWithdeleted();
  }

  @Query(() => Rent)
  fetchRent(
    @Args('rentId') rentId: string, //
  ) {
    return this.rentService.findOne({ rentId });
  }

  @Mutation(() => Rent)
  createRent(
    // 데이터 생성 부분
    @Args('name') name: string, //
    @Args('host') host: string,
    @Args('star_score') star_score: number,
    @Args('rent_pre_number') rent_pre_number: number,
    @Args('rent_contents') rent_contents: string,
    @Args('createRentInput') createRentInput: createRentInput,
  ) {
    return this.rentService.create({
      name,
      host,
      star_score,
      rent_pre_number,
      rent_contents,
      createRentInput,
    });
  }

  @Mutation(() => Rent)
  async updateRent(
    @Args('rentId') rentId: string,
    @Args('name', { nullable: true }) name: string, //
    @Args('host', { nullable: true }) host: string,
    @Args('star_score', { nullable: true }) star_score: number,
    @Args('rent_pre_number', { nullable: true }) rent_pre_number: number,
    @Args('rent_contents', { nullable: true }) rent_contents: string,
    @Args('updateRentInput') updateRentInput: updateRentInput,
  ) {
    return await this.rentService.update({ rentId, updateRentInput, name, host,star_score,rent_pre_number, rent_contents });
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
