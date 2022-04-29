/* 

    문제
    
    임의의 문자열을 입력받아, 문자열 내 중복된 글자가 있으면 true를, 없으면 false를 반환하는 함수를 완성하세요

    ex) isUnique('abcd') => false
        isUnique('0102') => true
    
*/

function isUnique(str) {
    // 여기에 코드를 작성하세요
    
    for(i=0; i < str.length-1; i++){
        for(j=i+1; j < str.length; j++){
            if(str[i] === str[j]){
                return true;
            } 
        }
        
    }
    return false;
}

module.exports = isUnique;