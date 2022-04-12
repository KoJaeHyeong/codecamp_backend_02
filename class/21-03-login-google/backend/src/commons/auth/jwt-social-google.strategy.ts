import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google') {
  // passport를 써서 strategy방식으로 처리할거야. 이름은 access야(리졸버에서 설정해 놓은 이름)
  constructor() {
    // docs에 나와있음
    super({
      // 받아오는 거이기 때문에 이렇게 코딩
      clientID: '입력하기',
      clientSecret: '입력하기', // 클라이언트의 시크릿패스워드
      callbackURL: '입력하기', // 리디렉션 주소
      scope: ['email', 'profile'], // 사이트 별로 스코프가 다 다르다.
    });
  }

  validate(accessToken: string, refreshToken: string, profile: any) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
    return {
      // 구글이니까 구글 개발자 사이트 가서 거기 양식에 맞게 코딩 한것!
      email: profile.emails[0].value,
      password: '1111',
      name: profile.displayName,
      age: 0,
    };
  }
}
