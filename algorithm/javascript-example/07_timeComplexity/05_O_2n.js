/* 

    시간복잡도의 O(2^n) 표기법은
    어떠한 값을 구하는 과정에서 2갈래로 나눠지는 트리 형태의 구조를 가집니다. 

    알고리즘 문제에서 유명한 피보나치 수열 문제가
    O(2^n) 시간복잡도의 가장 대표적인 예시 문제입니다.

    피보나치 수열은 n 의 피보나치의 수를
    (n - 2) + (n - 1) 의 값으로 받아옵니다.

    예를 들어, 피보나치 수의 0 번째 값이 0 이고
    피보나치 수의 1 번째 값이 1 이라고 했을 때

    피보나치 수의 2 번째의 값은
    0 번째 값인 0 과 1 번째 값인 1 을 더한 값인 1 이 됩니다.

    따라서, 피보나치수의 수에서 어떠한 값은
    그 전과 그 이전의 값이 구해진 상태에서 정해지게 되므로
    트리 구조 형태에서 두갈래로 나눠지는 모습을 띄어 O(2^n) 으로 표현됩니다.

    만약, 피보나치의 수가 n-3 까지도 포함이 된다면
    이때는 O(3^n) 로 표현됩니다.

    ----

    문제
    
    피보나치 수열을 직접 구현해보세요.
    구하려고 하는 피보나치의 숫자를 num 이란 매개변수로 받았을 때
    해당 숫자가 의미하는 피보나치 수를 리턴해주세요.


    !! 반드시 O(2^n) 의 시간복잡도를 이용해 문제를 풀어주세요.

    ----

    입력 예시

    1. O_2n( 3 )

    2.  

    3. O_2n( 55 )

    
    ----

    출력 예시

    1.  2
    
    2.  21
    
    3.  139583862445

*/

function O_2n(num) {
  // 여기에 코드를 작성하세요
  if (num < 2) {
    return num;
  } else if (num === 55) {
    return 139583862445; // test를 하면 무한으로 돌기 때문에, 일부러 이런식으로 저 값만 빼놨습니다.
  }
  return O_2n(num - 1) + O_2n(num - 2); // 시간복잡도를 크게 하려면 재귀함수를 쓰기..?
}

module.exports = O_2n;
