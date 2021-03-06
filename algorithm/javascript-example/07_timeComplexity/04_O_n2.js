/* 

    시간복잡도의 O(n^2) : Quadratic Time 표기법은
    O(n) 표기법의 n제곱수만큼의 시간복잡도를 가집니다.

    5개의 숫자 데이터가 들어있는 배열이 있다고 했을 때,
    서로 다른 인덱스에 있는 숫자와 더한 값을 구하려 합니다.

    이때, 현재 숫자의 기준이 될 수 있도록
    첫번째 반복문을 실행하게 되면 O(n) 시간복잡도를 가지게 됩니다.

    현재 숫자와 다른 인덱스의 숫자를 가져오기 위해서
    첫번째 반복문 안으로 두번째 반복문을 실행하여 다른 숫자를 가져오게 되면
    2제곱 만큼의 O(n) 시간복잡도를 가지게 됩니다.

    이렇게 반복문 안에 2중으로 작동되는 반복문의 시간복잡도를 O(n^2) 로 
    3중으로 작동된다면 O(n^3) 등으로 표현할 수 있습니다.


    ----

    문제
    
    O_n2 함수는 숫자 데이터가 담긴 배열 데이터 arr 가
    매개변수로 주어지게 됩니다.

    이 배열에서 각각 다른 인덱스에 있는 숫자 데이터를 가져와
    서로 더한 값을 새로운 배열에 담아 리턴해주세요.
    (이때, 중복되는 숫자 데이터는 제거해야 합니다.)


    !! 반드시 O(n^2) 의 시간복잡도를 이용해 문제를 풀어주세요.
    !! 새로운 배열에는 고유한 숫자 데이터만 들어와야 합니다.
    !! 서로 다른 인덱스에 있는 숫자끼리 더해야 합니다.

    ----

    입력 예시

    1. O_n2( [1, 2, 3, 4] )

    2. O_n2( [10, -6, 2, 1, 0] )
    
    ----

    출력 예시

    1.  [ 3, 4, 5, 6, 7 ]
    
    2.  [ 4, 12, 11, 10, -4, -5, -6, 3, 2, 1 ]
    
*/

function O_n2(arr, num) {
  // 여기에 코드를 작성하세요
  let result = [];
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      sum = arr[i] + arr[j];
      console.log(sum);
      result.push(sum);
    }
  }
  let result2 = new Set(result);
  return [...result2];
}
module.exports = O_n2;
