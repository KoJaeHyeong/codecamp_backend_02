// 인수로 전달된 숫자들의 총함을 구하는 함수를 만들어주세요.

//RestParameter를 사용해주세요.
function sum4(...args){
    let total =  0;
    for(num of args) {
      total += num
    }
    return total
  }
  console.log(sum4(5,7,2)); // 14
  
  // Rest 파라미터는 (...)을 사용하여 함수의 파라미터를 작성한 형태입니다. 즉, Rest 파라미터를 사용하면 함수의 파라미터로 오는 값들을 배열로 할당됩니다.
  
  // Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받기 위해, 스프레드 문법은 여러 개의 값이 하나로 뭉쳐 있는 배열과 같은 이터러블을 펼쳐 목록을 만듭니다. 이 둘은 서로 반대의 개념입니다.
  
  