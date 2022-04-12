import { UnprocessableEntityException } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { RentUserService } from '../rentUser/rentUser.service';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly rentUserService: RentUserService, //
    private readonly authService: AuthService,
  ) {}

  @Mutation(() => String)
  async login(
    @Args('email') email: string, //
    @Args('password') password: string,
  ) {
    // 1. 로그인(이메일과 비밀번호가 일치하는 유저 찾기)
    const user = await this.rentUserService.findOne({ email });
    // 2. 일치하는 유저가 없으면 에러!
    if (!user) throw new UnprocessableEntityException('이메일없대~ 짜샤!!');
    // 3. 일치하는 유저가 있지만, 암호가 틀린 경우 에러 던지기!!
    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth)
      throw new UnprocessableEntityException('암호 틀렸다~~ 잘 안보냐??');
    // 4. 일치하는 유저가 있으면? accessToken(JWT)을  만들어서 프론트엔트한테 주기
    return this.authService.getAccessToken({ user });
  }
}
