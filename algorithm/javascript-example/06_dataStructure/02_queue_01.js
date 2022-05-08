/* 

    queue 는 선입선출 특성을 가지는 자료구조 입니다.
    제일 먼저 들어온 데이터가 먼저 나가며
    제일 나중에 들어온 데이터는 제일 마지막에 나가는 구조를 가집니다.

    놀이공원에 놀러갔을 때 순서대로 줄을 서서 놀이기구를 탄다거나,
    은행에 가서 대기표를 발급받은 순서대로 업무를 보는 등이
    queue 에 해당하는 구조를 가집니다.

    데이터가 들어가는 과정을 Enqueue 라고 하며,
    데이터가 나가는 과정을 Dequeue 라고 합니다.

    ----

    문제
    
    Junny 는 여자친구와 함께 유명한 맛집에 가기 위한 계획을 짜려고 합니다.
    이때, 해당 맛집에서 대기줄이 생길 때 자신의 차례가 몇번 째 차례이고 
    앞에 몇명이 있는지를 알려주는 어플을 개발하기로 했습니다.

    현재 대기열을 나타내는 2차원 배열 queueArr 가 주어지고,
    2차원 배열의 데이터 중 "Me" 가 대기열의 자신의 현재 위치를 나타낼 때
    내 차례가 몇번 째 차례이며, 내 앞으로 몇명의 대기자가 있는지를
    [ 차례, 대기자 수 ] 형태로 리턴해주세요.


    예를 들어, queueArr 가
    [ [1, 2], [3, 4], [5, 6, 7], [8], ["Me"], [9, 10] ]
    와 같은 2차원 배열로 주어졌을 때

    문자열 "Me" 를 담고 있는 배열 앞으로 4개의 배열이 있고
    각각의 배열의 데이터의 수를 더하면 8개가 되므로
    [ 4, 8 ] 순서로 리턴합니다.
    
  
    !! 문자열 "Me" 는 배열 안에 반드시 포함되어 있습니다.
    !! 문자열 "Me" 를 담는 배열의 길이는 무조건 1 만 주어집니다.

    ----

    입력 예시

    1. queue_01([ [1, 2], [3, 4], [5, 6, 7], [8], ["Me"], [9, 10] ])

    2. queue_01([ [1, 2, 3, 4, 5, 6], ["Me"] ])
    
    ----

    출력 예시

    1.  [4, 8]
    
    2.  [1, 6]

*/

function queue_01(arr) {
  // 여기에 코드를 작성하세요.
  // 1. Me앞에 갯수
  let result = [];
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].includes('Me')) {
      result.push(i);
      console.log(result);
      for (j = 0; j < i; j++) {
        count += arr[j].length;
      }
      result.push(count);
    }
  }
  return result;
}

module.exports = queue_01;