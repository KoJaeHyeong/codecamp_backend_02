import { Controller, Get, Req, UseGuards, Res } from '@Nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { User } from '../users/entities/user.entity';
import { UserService } from '../users/user.service';
import { AuthService } from './auth.service';

interface IOAuthUser {
  user: Pick<User, 'email' | 'password' | 'name' | 'age'>; // 직접 적어줘도 되지만, 타입을 써서 있는거 몇개를 쓴다.
}

@Controller()
export class AuthController {
  constructor(
    private readonly userService: UserService, //
    private readonly authService: AuthService,
  ) {}
  @Get('/login/google')
  @UseGuards(AuthGuard('google'))
  async loginGoogle(
    @Req() req: Request & IOAuthUser,
    @Res() res: Response, //
  ) {
    req.user.email;

    // 1.가입확인
    let user = await this.userService.findOne({ email: req.user.email });

    // 2.회원가입
    if (!user) {
      user = await this.userService.create({
        // 회원가입을 시키고 다시 user에 담는다!!
        email: req.user.email,
        hashedPassword: req.user.password,
        name: req.user.name,
        age: req.user.age,
      });
    }
    //3. 로그인
    this.authService.setRefreshToken({ user, res }); // res안에 refreshToken이 저장 될거다.

    res.redirect(
      'http://localhost:5500/class/21-03-login-google/frontend/social-login.html',
    ); // 로그인하게 되면, 다른 페이지로 넘어갔다가 다시 원래 페이지로 돌아옴
  }
}
