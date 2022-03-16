// 학생들의 이름이 가나다 순서로 정렬된 배열이 있습니다.
// 이름이 '조'로 시작하는 학생이 제일 처음
// 등장하는 인덱스를 리턴하는 콜백함수 cb를 완성해주세요.
const arr = ['김세준', '백선호', '조아라', '홍재훈'];

function cb(element) {
  return element[0] === "조"
  // return element[0] === "조"; (다른 사람이 푼거)
  
}

const result = arr.findIndex(cb);

console.log('결과', result); // 2

// findindex()는 콜백 함수를 만족 할 때, 그 인덱스 값을 리턴함.
// 만족 값이 없다면, -1 리턴.

// findIndex() 함수와 indexOf() 함수의 차이는 매개변수로 콜백 함수를 받느냐, 찾는 값을 직접 받느냐
