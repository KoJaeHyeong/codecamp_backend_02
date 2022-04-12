import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { UseGuards } from '@nestjs/common';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth-guard';
import { CurrentUser } from 'src/commons/auth/gql-user.param';

@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService, //
  ) {}

  @Mutation(() => User)
  async createUser(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('name') name: string,
    @Args('age') age: number,
  ) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.userService.create({ email, hashedPassword, name, age });
  }

  @UseGuards(GqlAuthAccessGuard) //UseGuards를 통과하지 못하면, 밑에 코드를 실행 못한다.
  @Query(() => String)
  fetchUser(
    @CurrentUser() currentUser: any, //
  ) {
    console.log('currentUser는??!', currentUser);
    console.log('fetchUser 실행 완료!!');
    return '디질래 ㅅㅂ야';
  }
}
