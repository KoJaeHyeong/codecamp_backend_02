/*

    문제

    임의의 달을 입력받아, 각 달이 며칠로 이루어져 있는 지 알려주는 함수를 완성하세요.
    - 연도는 2016년을 기준으로 합니다.

*/


function countDays(month) {
    // 여기에 코드를 작성하세요
    day = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        return day[month - 1];
}


module.exports = countDays;