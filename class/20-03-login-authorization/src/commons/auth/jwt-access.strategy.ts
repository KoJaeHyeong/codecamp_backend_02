import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtAcessStrategy extends PassportStrategy(Strategy, 'access') {
  // passport를 써서 strategy방식으로 처리할거야. 이름은 aaa야(리졸버에서 설정해 놓은 이름)
  constructor() {
    // docs에 나와있음
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'myAccessKey',
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
