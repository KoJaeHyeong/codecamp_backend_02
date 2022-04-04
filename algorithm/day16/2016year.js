// 2016년
// 문제 설명
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

// 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

// 제한 조건
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
// 입출력 예
// a	b	result
// 5	24	"TUE"

// function solution(a, b) { //윤년은 2월29일이다.
//     var answer = '';
//     let sumDay = 0;
//     let day = ['THE','FRI','SAT','SUN','MON','TUE','WED']; // 인덱스로 찾기위 한 설계
//     let month = [31,29,31,30,31,30,31,31,30,31,30,31];// 그 달마다의 일수

//     for(i=0; i < a-1; i++){ // 내가 원하는 달의 일수만큼만 더해야하기 때문에 a-1
//         sumDay += month[i]; // 내가 정한 달의 일수니까, 흐른 달의 일수도 따라서 더해 줘야한다.
//     }
//     sumDay += b; // 내가 원하는 일수를 더해줘야 7로 나눈 나머지가 원하는 요일의 인덱스를 찾는다
//     let week = sumDay % 7
//     answer += day[week]
//     return answer;
// }

function solution(a, b) {
  const day = {
    0: "SUN",
    1: "MON",
    2: "TUE",
    3: "WED",
    4: "THU",
    5: "FRI",
    6: "SAT",
  };
  const getDate = new Date(`2016-${a}-${b}`);
  console.log(getDate);
  return day[getDate.getDay()];
}
