import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  // let appService: AppService;

  beforeEach(async () => {
    const appModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService], // app.module에서 만들어 놓은 것을 가지고 오는 작업.
    }).compile(); // 실행시키기 위한 코드

    appController = appModule.get<AppController>(AppController); // 꺽쇠 안은 타입

    // appService = new AppService(); // return 값을 쓰기 위해 AppService를 임포트해옴
    // appController = new AppController(appService); // Class AppController를 넣은거다.
  });

  describe('getHello', () => {
    it('이 테스트의 검증 결과는 Hello World를 리턴해야 함!!!', () => {
      const result = appController.getHello();
      expect(result).toBe('Hello World!');
    });
  });
});
