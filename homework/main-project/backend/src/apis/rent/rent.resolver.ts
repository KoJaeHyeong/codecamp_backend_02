import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { createRentScoreInput } from './dto/createRentScore.input';
import { createRentInput } from './dto/createRent.input';
import { updateRentInput } from './dto/updateRent.input';
import { updateRentScoreInput } from './dto/updateRentScore.input';
import { Rent } from './entities/rent.entity';
import { RentService } from './rent.service';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER, Inject } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Resolver()
export class RentResolver {
  constructor(
    private readonly rentService: RentService, //

    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,

    private readonly elasticsearchService: ElasticsearchService,
  ) {}

  @Query(() => [Rent])
  async fetchRents(
    @Args('search') search: string, //
  ) {
    // redis 조회/등록
    const srch = await this.cacheManager.get('accomodation');
    if (srch !== null) {
      console.log('redis', srch);
      return srch;
    } else {
      // 엘라스틱 서치 부분
      const elsrch = await this.elasticsearchService.search({
        index: 'accomodation',
        query: {
          match: { house_name: search },
        },
      });
      const result = elsrch['hits']['hits'].map((el) => {
        return el._source;
      });
      console.log(result);

      await this.cacheManager.set('accomodation', result, {
        ttl: 30000,
      });

      return result;
    }

    // return this.rentService.findAll();
  }

  @Query(() => Rent)
  async fetchRent(
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
