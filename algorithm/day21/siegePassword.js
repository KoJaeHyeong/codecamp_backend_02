// 시저 암호
// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.
// 입출력 예
// s	n	result
// "AB"	1	"BC"
// "z"	1	"a"
// "a B z"	4	"e F d"

// const lower = "abcdefghijklmnopqrstuvwxyz"
// const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// function solution(s, n) {
//     var answer = '';

//   for(let i=0; i < s.length; i++){
//     if( s[i] === " "){ // 공백일 경우
//   		answer += " ";

//   } else {
//소문자인지를 먼저 검증한후
//소문자가 맞다면, 소문자 리스트 저장
//소문자가 아니라면, 대문자 리스트를 저장
//     const word = lower.includes( s[i] ) ? lower : upper;
//     let index = word.indexOf( s[i] ) + n;

//     if( index >= 26){
//       index -= 26;
//     }
//     answer += word[index]
//   }
// }
//     return answer;
// }

// const aaa = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// function solution(s, n) {
//   let answer = "";

//   for (i = 0; i < s.length; i++) {
//     if (s[i] === " ") {
//       answer += " ";
//     } else {
//       let idx = aaa.indexOf(s[i]);
//       const word = idx > 25 ? aaa.slice(26, aaa.length) : aaa.slice(0, 26);

//       idx = word.indexOf(s[i]) + n;

//       if (idx >= 26) {
//         idx -= 26;
//       }

//       answer += word[idex];
//     }
//   }
//   return answer;
// }

const lower = "abcdefghijklmnopqrstuvwxyz"; // 소문자만 저장
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 대문자만 저장

function solution(s, n) {
  const answer = s.split("").reduce((acc, cur) => {
    // reduce는 함수구문에 따라 반복하면서 새로운 결과값 호출
    const word = lower.includes(cur) ? lower : upper;
    let idx = word.indexOf(cur) + n;

    if (idx >= 26) {
      idx -= 26;
    } else {
      return acc + (cur === " " ? " " : word[idx]);
    }
  }, ""); // 문자열이니까 초기값 ""로 해줌
  return answer;
}
