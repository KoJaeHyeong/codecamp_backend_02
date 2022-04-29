/* 

    문제
    
    임의의 문자열을 입력받아, 각 글자로 만들 수 있는 길이 2의 문자열들을 모두 확인하여 
    새로운 배열에 담아 반환하는 함수를 완성하세요.

    - 입력 문자열의 길이는 제한이 없습니다
    
    ex) league('ab') => ["aa", "ab", "ba", "bb"]
        league('123') => ["11", "12", "13", "21", "22", "23", "31", "32", "33"]

    ----
    
    힌트

    이중 반복문을 사용해야 합니다
    
*/

function league(str) {
    let result = [];
  	str = str.split("")
  
    for(i=0; i < str.length; i++){
        for(j=0; j < str.length; j++){
            result.push(str[i]+str[j])
        }
    }
  return result;
}

module.exports = league;