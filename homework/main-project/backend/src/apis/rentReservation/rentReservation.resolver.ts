import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth-guard';
import { CurrentUser, ICurrentUser } from 'src/commons/auth/gql-user.param';
import { RentReservation } from './entities/rentReservation.entity';
import { RentReservationService } from './rentReservation.service';

@Resolver()
export class RentReservationResolver {
  constructor(
    private readonly rentReservationService: RentReservationService, //
  ) {}

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => RentReservation)
  createRentReservation(
    @Args('impUid') impUid: string,
    @Args('price') price: number,
    @Args('rentId') rentId: string,
    @CurrentUser() currentUser: ICurrentUser,
  ) {
    console.log('AAAAA');
    return this.rentReservationService.create({
      impUid,
      price,
      currentUser,
      rentId,
    });
  }
}
