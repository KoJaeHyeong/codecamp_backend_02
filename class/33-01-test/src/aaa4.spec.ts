import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

class MockAppService {
  getHello() {
    return 'Hello World!';
  }
}

describe('AppController', () => {
  let appController: AppController;
  // let appService: AppService;

  beforeEach(async () => {
    const appModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService, // AppService를 주입하지 말고, MockAppService를 사용 해줘.
          useClass: MockAppService, // 나만의 AppService 주입하기
        },
      ],
    }).compile();

    appController = appModule.get<AppController>(AppController); // 꺽쇠 안은 타입
  });

  describe('getHello', () => {
    it('이 테스트의 검증 결과는 Hello World를 리턴해야 함!!!', () => {
      const result = appController.getHello();
      expect(result).toBe('Hello World!');
    });
  });
});
