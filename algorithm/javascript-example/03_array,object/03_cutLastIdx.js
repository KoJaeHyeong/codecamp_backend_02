/* 

    문제
    
    임의의 배열을 입력받아, 가장 마지막 인덱스의 값을 제외한 나머지 배열을 찾은 후
    [ 원본 배열, 마지막이 제거된 배열 ] 형태를 가지는 새로운 2차원 배열을 리턴해주세요.

    - 원본 배열이 수정되어서는 안됩니다. (얕은 복사와 깊은 복사의 차이점을 이용하세요)
    
    ex) cutLastIdx([1, 2, 3]) => [ [1, 2, 3], [1, 2] ]

*/


function cutLastIdx(arr) {
    // 여기에 코드를 작성하세요
    
    let backArr = arr.slice(0, arr.length-1) // slice는 얕은복사(원본 보존)
    return [arr, backArr]

}

module.exports = cutLastIdx;