// 타입추론
let aaa = "안녕하세요"; // 알아서 타입을 추론 해준다.
aaa = 3;

// 타입명시
let bbb: string = "반갑습니다.";
bbb = 10;

// 문자타입
let ccc: string;
ccc = "반가워요";
ccc = 3;

// 숫자타입
let ddd: number;
ddd = "안녕하세요";

// 불린타입
let eee: boolean;
eee = false;
eee = "false"; // true로 작동함

// 배열타입
let fff: number[] = [1, 2, "안녕하세요"]; // 숫자가 들어가는 배열
let ggg: string[] = ["철수", "영희", "훈이", 13]; // 문자열이 들어가는 배열
let hhh: (number | string)[] = ["철수", "영희", "훈이", 13]; // 둘 중 어떤 걸 넣어도 가능한 배열

// 객체타입
interface IProfile {
  name: string;
  age: number | string;
  school: string;
  hobby?: string; // ?를 넣어주면 지금은 없지만 , 나중에 생길수도 있다. 라는 뜻
  banana?: string;
}

let profile: IProfile = {
  // 타입추론이 편하긴 하지만, 타입명시를 해주는 경우가 많다.
  name: "철수",
  age: 8,
  school: "다람쥐초등학교",
};
profile.age = "8살";
profile.school = 123;
profile.hobby = "수영";
profile.banana = "바나나";

// 함수타입
const add = (money1: number, money2: number, unit: string): string => {
  // 반환값에도 타입을 넣음
  // 나는 넘버로 받을거야~, 스트링으로 받을거야~~
  return money1 + money2 + unit;
};

add(1000, 2000, "원");
