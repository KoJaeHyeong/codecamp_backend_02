// 1. 문자
export function getString(arg: string): string {
  return arg;
}
const result1 = getString('철수'); // 앞에서 미리 타입을 지정해버림으로써 결과값을 예측할수 있음.
console.log(result1);

//
//
// 2. 숫자
export function getNumber(arg: number): number {
  return arg;
}
const result2 = getNumber(8);
console.log(result2);

//
//
// 3. any 타입 (그냥 자바스크립트랑 같음)
export function getAny(arg: any): any {
  // 모든타입 쌉가능(단점은 어떤 타입인지 예측이 안됨.)
  return arg;
}
const result31 = getAny('철수');
const result32 = getAny(8);
const result33 = getAny(true);
console.log(result31);
console.log(result32);
console.log(result33);

//
//
// 4. generic 타입(들어온 타입을 그대로 사용)
export function getGeneric<MyType>(arg: MyType): MyType {
  return arg;
}
const aaa: string = '철수';
const bbb: number = 8;
const ccc: boolean = true;
const result41 = getGeneric(aaa);
const result42 = getGeneric(bbb);
const result43 = getGeneric(ccc);
console.log(result41);
console.log(result42);
console.log(result43);

//
//
// 5. any 응용!!
// prettier-ignore
export function getAnyReverse(arg1: any, arg2: any, arg3: any): [any, any, any] {
        return [arg3, arg2, arg1];
      }
const result5 = getAnyReverse('철수', '다람쥐초등학교', 8);
console.log(result5);

//
//
// 6. generic 응용!!
// prettier-ignore
export function getGenericReverse<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
        return [arg3, arg2, arg1]
      }
const result6 = getGenericReverse('철수', '다람쥐초등학교', 8);
console.log(result6);

//
//
// 7. generic 응용!! - 축약버전1
// prettier-ignore
export function getGenericReverseT<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
      return [arg3, arg2, arg1]
    }
const result7 = getGenericReverse('철수', '다람쥐초등학교', 8);
console.log(result7);

//
//
// 8. generic 응용!! - 축약버전2
// prettier-ignore
export function getGenericReverseTUV<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] { // 제너릭은 라이브러리를 만들때 많이 쓴다.
      return [arg3, arg2, arg1]
    }
// const result8 = getGenericReverse('철수', '다람쥐초등학교', 8); // 지정을 안해주면 들어간 값에 따라 타입이 정해진다.
const result8 = getGenericReverse<string, number, number>('철수', 3, 8); // 이거 처럼 미리 타입을 설정해줄수있다.
console.log(result8);
