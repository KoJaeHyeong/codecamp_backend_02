// 코캠컴퍼니에서는 신입사원을 뽑고있습니다.
// 프론트엔드 직무 지원자 명단과
// 백엔드 직무 지원자 명단이 주어질 때,
// 중복 지원한 사람을 찾아 배열에 담아 리턴해주세요.
function solution(front, back) {
    // return front.filter((it) => back.includes(it)); => 다른사람이 푼것
   for(i=0; i < front.length; i++) {
     for(k=0; k < back.length; k++) {
       if(front[i] === back[k]) {
         const result = front[i];
         return result;
       }
     }
        
   }
 }
 
 const front = ['아라', '세준', '재환'];
 const back = ['지연', '아라', '재훈'];
 const result = solution(front, back);
 console.log("결과", result); // ["아라"]
 
 // includes는 배열이 특정 요소를 포함하는지 판단
 // true/false 값을 반환
 
 // includes(valueToFind, fromIndex)
 
 