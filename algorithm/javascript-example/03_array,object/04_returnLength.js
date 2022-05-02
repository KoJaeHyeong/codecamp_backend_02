/* 

    문제
    
    임의의 배열을 입력받아, 배열의 길이를 리턴하는 함수를 완성하세요
    - 반복문을 사용해야 합니다
    - length 메소드는 사용이 금지됩니다
    
*/


function returnLength(arr) {
    // 여기에 코드를 작성하세요
    // let count = 0;
    // for(i=0; i < arr.length; i++){
    //     count += 1;
    // }
    // return count
    let count = 0;
    arr.forEach( (el) => { // forEach는 각각의 요소에 대해서 함수를 실행(반복문줄이기용?)
        count += 1
    })
    return count
}

module.exports = returnLength;