// 제일 작은 수 제거하기
// 문제 설명
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
// 입출력 예
// arr	return
// [4,3,2,1]	[4,3,2]
// [10]	[-1]

function solution(arr) {
    // 1. 가장 작은 수 찾기
    // 2. 가장 작은 수 제거 - 작은수의 idx를 찾는다, idx를 가지고 작은수를 제거 해준다.
    // 3. 빈배열 -1 return - 빈배열이 아니면 그대로 return, 빈배열이면 [-1] return
     
    if( arr.length > 1){
        let min = Math.min(...arr)
        let idx = arr.indexOf(min);
        arr.splice(idx,1); // splice는 원본 배열을 바꾼다. cf. slice는 얕은 복사임.
        
        return arr;
        
    } else {
        return [-1]
    }
}