interface IProfile {
  name: string;
  age: 13;
  school: string;
  hobby?: string;
}

// interface IProfile {
//   apple: string;
// }

// 선언병합
// const bbb: IProfile{

// }

// 1. Partial 타입
type Mytype1 = Partial<IProfile>; // 요소들이 필수요소가 아니다

// 2. Required 타입
type Mytype2 = Required<IProfile>; // 전부다 필수요소다

// 3. Pick 타입
type Mytype3 = Pick<IProfile, 'name' | 'age'>; // 내가 정한 것만 골라줘

// 4. Omit 타입
type Mytype4 = Omit<IProfile, 'school'>; // 내가 정한 것만 제외해줘

// 5. Record 타입
type ZZZ = 'aaa' | 'qqq' | 'rrr';
type Mytype6 = Record<ZZZ, IProfile>; // 집합소 느낌
