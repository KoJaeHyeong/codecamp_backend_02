// 객체의 value에 null이 하나라도 있으면
// 순회를 멈추고 "400 ERROR"를 출력하도록
// solution 함수를 완성해주세요.
function solution(element, index, array) {
    console.log(index)
    // 여기에서 작업하세요.
    if (element === null){
        console.log("400 ERROR");
      return index;
    }
  }
  
  const inputs = {
    name: '코캠',
    title: null,
    contents: '안녕하세요.'
  };
  
  Object.values(inputs).some(solution);
  // 0
  // 1
  // 400 ERROR
  
  // some() : 배열을 순회하면, 한 개의 요소라도 콜백 함수를 만족시키면 순회를 멈추고 true를 리턴
  
  // 모두 만족못하면, false를 리턴
  
  