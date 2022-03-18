// 숫자로 읽을 수 있는 문자열이 담긴 배열이 있습니다.
// 문자열을 숫자로 변환해 배열에 담을 수 있게 solution 함수를 완성해주세요.
// HINT : Number('1')

function solution(element, index, array) {
    return Number(element);

}

const arr = ['1', '2', '3'];

const result = arr.map(solution);

console.log(result); // [1, 2, 3]

// map() : 배열을 순회 하며, 콜백 함수에서 리턴하는 값을 모아 새로운 배열을 리턴해준다.

// function cb(element, index, array) {
//   return element * 2;
// }

// const arr = [1, 2, 3, 4, 5];

// const result = arr.map(cb);

// console.log(result); // [2, 4, 6, 8, 10]

// 리턴한걸 리턴한다구요??

// 리턴이라는 단어가 여러번 언급되는게 헷갈리실 수도 있는데요! 

// 정리해보자면 element * 2 의 값이 각각 리턴되는 것은 콜백 함수 cb 입니다.

// 그리고 이를 모아서 배열로 리턴하는 것은 map 함수입니다!