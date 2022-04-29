/*

    문제

    점수를 입력받아 점수에 맞는 등급을 자세히 알려주는 함수를 완성하세요.
    점수가 0점 미만이거나 100점을 초과할 경우 '잘못된 입력입니다'를 리턴해야 합니다.

    > 등급 영역
        - 0점 미만 또는 100 점 초과 : '잘못된 입력입니다'
        - 90점 ~ 100점 : 'A'
        - 80점 ~ 89점 : 'B'
        - 70점 ~ 79점 : 'C'
        - 60점 ~ 69점 : 'D'
        - 0점 ~ 59점 : '등급 미달'

    > 세부 등급
        - 각 점수 등급 중 일의 자리 점수에 따라 세부 등급을 기존 등급 뒤에 붙여 표시해야 합니다. 
        - 7~9점대는 +
        - 4~6점대는 0
        - 0~3점대는 -

        ex) 72점 => C-
            89점 => B+
           100점 => A+
*/


function ratingDetail(num) {
    // 여기에 코드를 작성하세요
    if(num >= 90 && num <= 100){
        if(num >= 97 && num <= 100){
            return "A+";
        } else if( num >= 94 && num <= 96){
            return "A"
        } else {
            return "A-"
        }
    } else if( num >= 80 && num <= 89){
        if(num >= 87 && num <= 89){
            return "B+";
        } else if( num >= 84 && num <= 86){
            return "B"
        } else {
            return "B-"
        }
    } else if( num >= 70 && num <= 79){
        if(num >= 77 && num <= 79){
            return "C+";
        } else if( num >= 74 && num <= 76){
            return "C"
        } else {
            return "C-"
        }
    } else if( num >= 60 && num <= 69){
        if(num >= 67 && num <= 69){
            return "D+";
        } else if( num >= 64 && num <= 66){
            return "D"
        } else {
            return "D-"
        }
    } else if( num >= 0 && num <= 59){
        return "등급 미달"
    } else {
        return "잘못된 입력입니다"
    }
    
}


module.exports = ratingDetail;