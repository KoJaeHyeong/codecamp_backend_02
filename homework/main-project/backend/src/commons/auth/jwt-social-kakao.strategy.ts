import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao';

@Injectable()
export class JwtKakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor() {
    super({
      clientID: '68a918cda385aa98790a0b959e3b1ccb', // restApi 키
      clientSecret: 'i4KnUQDGpxvybdJPJHfyUxTy3MsDfhNc',
      callbackURL: 'http://localhost:3000/login/kakao',
    });
  }

  validate(accessToken: string, refreshToken: string, profile: any) {
    console.log('1', accessToken);
    console.log('2', refreshToken);
    console.log('3', profile);
    return {
      email: profile._json.kakao_account.email,
      password: '1234',
      name: profile.displayName,
      birth: '1994-04-15',
      rentId: '0580998c-9be8-4efa-b3b5-936761f46b54',
    };
  }
}
