// 배열 numbers에 5가 있는지 find 함수를 이용해 찾아주세요.

const numbers = [1, 2, 3, 4, 5];

function callBackFn(ele, idx, arr) { 
  // 배열의 요소가 5일 때 true를 리턴하도록 작성해주세요.
  // return ele === 5; 페어가 푼거 (0)
  // return idx === 4; (0)
  // return ele > 4; (0) 
}
    

let result = numbers.find(callBackFn);
console.log("결과", result); // 5

//콜백함수는 ele,idx,arr순서대로 들어간다.
// find는 베열을 돌다가 true가 되면, 더이상 순회하지 않고 함수가          종료됨.
