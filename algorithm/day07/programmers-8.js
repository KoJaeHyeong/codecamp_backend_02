// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// 입출력 예
// s	return
// "a234"	false
// "1234"	true

// function solution(s) {
//     if(s.length === 4 || s.length === 6) { 
//         for(i=0; i < s.length; i++) {
//             if(isNaN(Number(s[i])) === true) {
//                 return false;
//              } 
//         } return true;
//     }
//     return false;   
// }



// // function solution(s) {
// //    return s.length == 4 || s.length == 6 ? !isNaN(s) : false;
// // }


// function solution(s) {
//     if(s.length === 4 || s.length === 6) { 
//         for( num of s) {
//             if(isNaN(num) === true) {
//                 console.log(num)
//                 return false;
//              } 
//         } return true;
//     }
//     return false;   
// }

function solution(s) {
    if(s.length === 4 || s.length === 6) { 
        return false;
    }{
    
     const answer = s.split("").filter( num => {
         // 문자가 맞는 데이터만 남긴다.
         return isNaN( num )
     });
     // 배열이 비어있는지 (문자열이 하나라도 존재하지 않는지)를 판단해서
     // 배열이 비어있지 않다면, false
     return answer.length === 0
    }
 }