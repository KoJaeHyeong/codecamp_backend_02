// 숫자와 문자가 섞여있는 배열 arr이 주어질 때,
// 숫자는 숫자끼리, 문자는 문자끼리 순서대로 더해
// 새로운 배열에 [숫자합, 문자합] 형태로
// 리턴해주는 함수 solution을 완성하세요.
// 숫자와 문자가 섞여있는 배열 arr이 주어질 때,
// 숫자는 숫자끼리, 문자는 문자끼리 순서대로 더해
// 새로운 배열에 [숫자합, 문자합] 형태로
// 리턴해주는 함수 solution을 완성하세요.
function solution(arr) {
    let sum = 0;
    let str = '';
  
    for (let i = 0; i < arr.length; i++) {
          if(typeof arr[i] === "number") {
            sum += arr[i];
      } else { // 숫자랑 문자열만 있어서, 그냥 else로 써도 될거 같다.
              str += arr[i];
        }
  }
    return [sum, str];
  }
  const arr = [4, 6, 'aa', 2, 'b', 3];
  
  const result = solution(arr);
    
  console.log(result); // [15, "aab"]
  
  // typeof 변수 : 그 값의 타입을 알고 싶을때!
  // 배열인지 확인하기 위해서는 Array.isArray(배열)