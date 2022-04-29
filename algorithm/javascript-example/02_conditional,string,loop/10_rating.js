/*

    문제

    점수를 입력받아 점수에 맞는 등급을 알려주는 함수를 완성하세요.
    점수가 0점 미만이거나 100점을 초과할 경우 '잘못된 입력입니다'를 리턴해야 합니다.
    
    - 0점 미만 또는 100 점 초과 : '잘못된 입력입니다'
    - 90점 ~ 100점 : 'A등급'
    - 80점 ~ 89점 : 'B등급'
    - 70점 ~ 79점 : 'C등급'
    - 60점 ~ 69점 : 'D등급'
    - 0점 ~ 59점 : '등급 미달'

*/


function rating(num) {
    // 여기에 코드를 작성하세요
    if(num >= 90 && num <= 100){
        return "A등급";
    } else if( num >= 80 && num <= 89){
        return "B등급"
    } else if( num >= 70 && num <= 79){
        return "C등급"
    } else if( num >= 60 && num <= 69){
        return "D등급"
    } else if( num >= 0 && num <= 59){
        return "등급 미달"
    } else {
        return "잘못된 입력입니다"
    }
    
}


module.exports = rating;