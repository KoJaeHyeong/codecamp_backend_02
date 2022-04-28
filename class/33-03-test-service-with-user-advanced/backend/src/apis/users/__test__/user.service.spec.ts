import { ConflictException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { UserService } from '../user.service';
import { Repository } from 'typeorm';

class MockUserRepository {
  // 진짜와 똑같게 가짜 기능들을 여기서 만들어줘야만 한다!!
  // Test할때는 MockUserRepository로 쓰는 거니까
  mydb = [
    { email: 'kojae2423@naver.com', password: '1234', name: '재형', age: 29 }, // 객체의 수는 데이터의 수
  ];

  findOne({ email }) {
    const users = this.mydb.filter((el) => el.email === email); // 필터를 써서 찾아줌
    if (users.length) return users[0]; // 값이 존재하는지 그냥 길이로 확인.
    return null;
  }

  save({ email, password, name, age }) {
    this.mydb.push({ email, password, name, age });
    return { email, password, name, age };
  }
}

// const IProfile = { // keyof 예시
//   name: '철수',
//   age: 13,
// }

// const qqq: keyof IProfile;
// const qqq: "name" | "age"

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>; // Mock은 가짜인거에 초점!

describe('UserService', () => {
  let userService: UserService; //  userService = userModule.get<UserService>(UserService); 이 부분을 쓰기 위한 변수 설정!!
  let userRepository: MockRepository<User>;

  beforeEach(async () => {
    const userModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User), // 원본이 이건데, 밑에 가짜 class를 사용해줘!
          useClass: MockUserRepository,
        },
      ],
    }).compile();

    userService = userModule.get<UserService>(UserService);
    userRepository = userModule.get<MockRepository<User>>(
      getRepositoryToken(User),
    );
  });

  // UserService부분의 create 부분 검증
  describe('create', () => {
    it('이미 존재하는 이메일 검증하기!!', async () => {
      const userRepositorySpyFindOne = jest.spyOn(userRepository, 'findOne'); // 몇번 실행됐는지 스파이가 붙어서 확인
      const userRepositorySpySave = jest.spyOn(userRepository, 'save');

      const myData = {
        email: 'kojae2423@naver.com', // 서비스 부분과 같게 맞춰줘야함
        hashedPassword: '1234',
        name: '철수',
        age: 29,
      };
      try {
        await userService.create({ ...myData });
      } catch (error) {
        expect(error).toBeInstanceOf(ConflictException);
      }

      expect(userRepositorySpyFindOne).toBeCalledTimes(1); // 몇번 실행이니?
      expect(userRepositorySpySave).toBeCalledTimes(0); // save는 실행되면 안된다.
    });

    it('회원등록이 잘됐는지 검증!!', async () => {
      const userRepositorySpyFindOne = jest.spyOn(userRepository, 'findOne'); // 몇번 실행됐는지 스파이가 붙어서 확인
      const userRepositorySpySave = jest.spyOn(userRepository, 'save');
      const myData = {
        email: 'kojae1586@naver.com', // 서비스 부분과 같게 맞춰줘야함
        hashedPassword: '1234',
        name: '철수',
        age: 29,
      }; // 받는 값이 password가 있기 때문에 하나 더 만들어 줘야 한다.

      const myResultData = {
        email: 'kojae1586@naver.com', // 서비스 부분과 같게 맞춰줘야함
        password: '1234',
        name: '철수',
        age: 29,
      };

      const result = await userService.create({ ...myData });
      expect(result).toStrictEqual(myResultData);

      expect(userRepositorySpyFindOne).toBeCalledTimes(1); // 몇번 실행이니?
      expect(userRepositorySpySave).toBeCalledTimes(1); // save는 실행되면 안된다.
    }); // 한번에 다 만들게 아니라 업데이트 할때마다 늘려가는 거!
  });

  describe('findOne', () => {});
});
