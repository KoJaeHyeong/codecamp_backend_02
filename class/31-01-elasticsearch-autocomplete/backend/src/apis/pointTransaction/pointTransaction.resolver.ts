import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth-guard';
import { CurrentUser, ICurrentUser } from 'src/commons/auth/gql-user.param';
import { PointTransaction } from './entities/pointTransaction.entity';
import { PointTransactionService } from './pointTransaction.service';

@Resolver()
export class PointTransactionResolver {
  constructor(
    private readonly pointTransactionService: PointTransactionService, //
  ) {}
  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => PointTransaction) // 객체로 불러오기 위해 entity에서 objectType을 데코레이터 해줌.
  createPointTransaction(
    @Args('impUid') impUid: string,
    @Args('amount') amount: number,
    @CurrentUser() currentUser: ICurrentUser,
  ) {
    return this.pointTransactionService.create({ impUid, amount, currentUser });
  }
}
