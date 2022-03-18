// 배열의 요소가 짝수인 경우 count에 1을 더해,
// 최종적으로 짝수의 갯수와 count의 값이 같도록
// solution 함수를 완성해주세요.

let count = 0;

function solution(element, index, array) {
if( element % 2 === 0) {
			  count += 1
  } 
}

const arr = [1, 2, 3, 4, 5];

arr.forEach(solution);

console.log(count); // 2

// forEach : 배열을 순회하면서 각 요소마다 콜백 함수를 실행해 특정 동작을 할 수 있다.
// 배열을 리턴 X (undefiend 반환)

// 배열에서 반복문을 써야 할때 for문 대신 forEach()를 많이 사용한다. = 코드 간결

// 새로운 배열이 필요하다면 map을 사용하고, 그런게 아니라면 forEach를 사용하면 됩니다.