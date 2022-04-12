import { UnprocessableEntityException } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from '../users/user.service';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly userService: UserService, //
    private readonly authService: AuthService,
  ) {}

  @Mutation(() => String)
  async login(
    @Args('email') email: string, //
    @Args('password') password: string,
  ) {
    // 1. 로그인(이메일과 비밀번호가 일치하는 유저 찾기) - userService에서 findOne을 찾아온다.
    const user = await this.userService.findOne({ email });
    // 2. 일치하는 유저가 없으면? 에러 던지기!!
    if (!user) throw new UnprocessableEntityException('이메일 없대~ 짜샤!!'); // 로직상에 문제
    // 3. 일치하는 유저가 있지만, 암호가 틀렸다면?? 에러 던지기!!
    const isAuth = await bcrypt.compare(password, user.password); // 두 비밀번호를 비교한다.
    if (!isAuth)
      throw new UnprocessableEntityException('암호 틀렸다~~ 잘 안볼래?');
    // 4. 일치하는 유저가 있으면?! accessToken(=JWT)을 만들어서 프론트엔드에 주기
    return this.authService.getAccessToken({ user }); // => JWT , return해서 프론트한테 넘겨줌.
  }
}
