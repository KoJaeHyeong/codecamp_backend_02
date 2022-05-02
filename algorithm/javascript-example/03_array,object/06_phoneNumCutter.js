/* 

    문제
    
    휴대전화 번호가 담긴 배열을 입력받아, 가운데 4자리를 별표(*)로 바꾸어 반환하는 함수를 완성하세요
    - 배열의 각 인덱스로 주어지는 휴대전화 번호는 "01012345678"과 같은 형태입니다. (string)
    - 문자열 배열을 리턴해야 합니다

    ex) phoneNumCutter(["01012345678", "01087654321", "01099995555"]) => ["010****5678", "010****4321", "010****5555"]
    
*/


function phoneNumCutter(arr) {
    // 여기에 코드를 작성하세요
    // 1. 배열 안 요소별로 반복문을 써서 진행
    // 2. 가운데 숫자 4자리 *로 마스킹
    let result = [];
    arr.forEach( (el) => {
        result.push(el.slice(0, 3) + "*".repeat(4) + el.slice(7)) // slice로 얕은 복사를 하여 마스킹한 값과 이어 붙이기.
    })
    return result;
}

module.exports = phoneNumCutter;