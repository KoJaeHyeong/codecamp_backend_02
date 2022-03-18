// 주어진 배열에서 짝수인 요소만 걸러
// 새로운 배열에 담도록 solution 함수를 완성해주세요.
function solution(element, index, array) {
  
    return (element % 2 === 0);

}

const arr = [1, 2, 3, 4, 5, 6];

const result = arr.filter(solution);

console.log(result); // [2, 4, 6]


// filter() : 배열을 돌면서 조건에 맞지 않는 요소들을 필터링 해주는 함수
// 콜백 함수를 넘겨주어, 이 콜백 함수가 true를 리턴하는 요소들만 모아 새로운 배열을 리턴 , 조건에 맞는 요소가 없다면, 빈 배열 리턴

// * 배열에서 중복되는 값을 제거하거나, 짝수만 골라내거나, 빈 문자열을 제거해야하는 상황에서 쓰일 수 있습니다. 이 외에도 다양하게 활용되는 함수이니 꼭 알아두세요!

