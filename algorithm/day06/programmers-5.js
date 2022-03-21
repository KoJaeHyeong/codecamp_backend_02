
// 문제 설명
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
// 입출력 예
// arr	return
// [1,2,3,4]	2.5
// [5,5]	5

function solution(arr) {
    var answer = 0;
    let sum = 0;
    
    for(i=0; i < arr.length; i++) {
        sum += arr[i]
        
    }
    answer = sum / arr.length;
    return answer
}

function solution(arr) {
    return arr.reduce((a, b) => a + b) / arr.length 
    
}

function solution(arr) {
    const result = arr.reduce(function(a, b){
       return sum = a + b;
    })
    return result / arr.length
}

// reduce (acc, cur) => {
 
// } reduce 는 반복문이다. 반복되면서, 그 값들을 계속해서 누적한다. 그리고, 반드시 return값을 넘겨줘야 한다.