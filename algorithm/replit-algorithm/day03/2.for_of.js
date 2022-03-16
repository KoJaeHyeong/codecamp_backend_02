// 숫자로만 이루어진 배열이 있습니다.
// for-of를 이용해 숫자의 총합을 구해주세요.

const arr = [11, 22, 33, 44, 55];
let sum = 0;
for(let element of arr) {
  sum += element
}

// for-of

console.log(sum); // 165

// for-of 공부

// for of 반복문은 for in 반복문과 유사하지만 배열에 주로 사용합니다.

// 즉, 배열 안에에 자료들을 하나씩 꺼내고 싶을때 사용하는 것입니다.

// 엄밀히 말하자면, iterable인 자료형들에만 적용 가능!!

// const array = ['a', 'b', 'c'];

// // for문
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// // for-of
// for (let element of array) {
//   console.log(element);
// }


// 배열에 사용할 때

// const array = ['a', 'b', 'c'];

// for (let element of array) {
//   console.log(element);
// }

// 'a'
// 'b'
// 'c'

// 문자열에 사용할 때

// const str = 'abc';

// for (let element of str) {
//   console.log(element);
// }

// 'a'
// 'b'
// 'c'

// 객체에 사용 할떄!!

// const obj = { age: 8, name: '철수' };

// const result = Object.entries(obj);
// // [["age", 8], ["name", "철수"]]

// // for-of 적용
// for (let element of result) {
//   let [key, val] = element; // 구조분해할당
//   console.log(key + '은(는) ' + val);
// }

// "age은(는) 8"
// "name은(는) 철수"

// 더 간결하게!!

// const obj = { age: 8, name: '철수' };

// for (let [key, val] of Object.entries(obj)) {
//   console.log(key + '은(는) ' + val);
// }

// "age은(는) 8"
// "name은(는) 철수"