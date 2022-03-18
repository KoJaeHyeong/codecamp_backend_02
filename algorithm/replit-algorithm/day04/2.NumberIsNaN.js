/* 문자열로 이루어진 배열이 있습니다.
   "123"처럼 숫자로 읽을 수 있는 문자도 있고,
   "1a"처럼 숫자로 읽을 수 없는 문자도 있습니다. 

   이 배열이 주어질 때 
   숫자로 읽을 수 있는 경우에는 숫자로 바꿔
   총 합을 리턴하는 함수 solution을 완성해주세요.
*/
function solution(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
          if(isNaN(arr[i]) === false){
        sum += Number(arr[i])
      }
      
    }
  
    return sum;
  }
  
  const arr = ['1', '2w', '3', 'qwer'];
  
  const result = solution(arr);
  
  console.log(result); // 4
  
  // NaN : 숫자가 아님(null, undefined와 비슷 하다고 보면됨)
  
  // console.l0g("a" / 3); NaN
  
  // console.log(NaN === NaN); // false
  // console.log('a' / 3 === NaN); // false
  // NaN은 === 로 판별할 수가 없다.항상 false가 나온다.
  // 그래서 isNaN함수가 필요, NaN, 문자열을 포함하는 덧셈이 아닌 계산식 => true
  // 문자열인 경우 => false
  
  // console.log(Number.isNaN(NaN));     // true
  // console.log(Number.isNaN('a' / 3)); // true
  // console.log(Number.isNaN('abc'));   // false
  // console.log(Number.isNaN('1'));     // false