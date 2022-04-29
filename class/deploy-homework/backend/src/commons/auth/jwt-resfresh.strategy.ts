import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  // passport를 써서 strategy방식으로 처리할거야. 이름은 access야(리졸버에서 설정해 놓은 이름)
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
