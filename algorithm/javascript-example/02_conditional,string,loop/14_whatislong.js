/* 

    문제
    
    임의의 문자열 3개를 입력받아, 가장 긴 문자열을 리턴하는 함수를 완성하세요
    가장 긴 문자열이 두개 이상일 경우 가장 마지막에 찾은 문자열을 리턴해주세요.

*/


function whatIsLong(str1, str2, str3) {
    // 여기에 코드를 작성하세요
    let result = [str1, str2, str3];
    let length = Math.max(str1.length, str2.length, str3.length)
    
    for(i=0; i < result.length; i++){
        if( result[i].length === length){
            return result[i];
        }
    }
}

module.exports = whatIsLong;