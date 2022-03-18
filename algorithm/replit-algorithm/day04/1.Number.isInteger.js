/*
  어떤 숫자 num이 주어졌을 때, 
  Number.isInteger()를 이용해
  정수라면 그대로 두고,
  실수라면  Math.ceil()을 이용해 올림을 해주는 함수 solution을 완성해주세요.
*/
function solution(num) {
	if(Number.isInteger(num)){ // 앞에 !를 붙이면 반대를 말함
    return num;
  }
    return Math.ceil(num)
}

console.log(solution(3)); // 3
console.log(solution(3.3)); // 4

// Number.isInteger()은 주어진 값이 정수인지 아닌지 판별
// 정수: true, 아니면: false

// 안되는 상황을 먼저 return해서 종료
// 이것이 에러 핸들링?? 이라는거 같은데??