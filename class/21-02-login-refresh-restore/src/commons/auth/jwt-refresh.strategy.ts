import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
 
  constructor() {
    // docs에 나와있음
    super({
      jwtFromRequest: (req) => req.headers.cookie.replace('refreshToken=', ''),

      // req.headers.cookie 에 있는 refreshToken 골라내기
      secretOrKey: 'myRefreshKey',
    });
  }

  validate(payload) {
    console.log(payload); // 복호화된 키
    return {
      id: payload.sub,
      email: payload.email,
    };
  }
}
