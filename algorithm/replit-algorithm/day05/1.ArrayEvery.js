// 배열의 모든 element가 숫자라면 true,
// 하나라도 숫자가 아니라면 false를 리턴하도록
// 콜백 함수 solution 함수를 완성하세요.
function solution(element, index, array) {
    if(typeof element !== 'number') {
  return false;
} else {
  return true;
}


}

const result1 = [1, 2, 3, 4, 5].every(solution) 
console.log('result1', result1) // true

const result2 = [1, 2, 3, '4', 5].every(solution) 
console.log('result2', result2) // false

// every() : 배열을 순회하면서 배열의 모든 요소가 콜백함수를 만족시키는 확인한다.

// 모든 요소에서 콜백 함수가 true를 리턴 =  함수도 return

// 하나라도 false면 순회를 멈추고 false 반환.

// => 배열을 검증할 때 사용한다.

// 콜백 함수에 배열의 각 요소, 인덱스, filter를 실행한 전체 배열을 넘겨줍니다.

// function cb(element, index, array) {
//   return element > 0;
// }

// const arr = [1, -3, 3];

// const result = arr.every(cb);

// console.log(result); // false