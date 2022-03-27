// # Assignment

// ### index.js에서 `vote` 함수를 만들어주세요.

// 학급 회장은 뽑는데 후보로 기호 A B C D E 후보가 등록 했습니다. 투표용지에는 학생들이 자기가 원하는 후보의 기호(알파벳)가 쓰여져 있으며, 선생님은 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력하는 `vote`함수를 만들어 주세요.

// - `vote` 함수의 인자로는 임의의 문자열을 전달받게 됩니다.
// - 인자 이름은 원하는 대로 지어주셔도 됩니다.
// - `map 객체`를 사용해 주세요.
// - 되도록 `map 객체의 메서드`를 사용해 보세요.
// - 결과는 `String`형태로 반환해 주세요.

// **참고 사항**
// - 임의의 문자열 안에 쓰여 있던 각 후보의 기호가 선생님이 발표한 순서대로 입력됩니다.


// **입력 예제1**
// - 'BACBACCACCBDEDE'

// **출력 예제1**
// - 'C'

//assignment
function vote(str){
    let answer;
    let aaa = new Map();
    
      for( el of str){
        if( aaa.has(el)) {
          aaa.set(el, aaa.get(el) + 1);
        } else {
          aaa.set(el, 1);
        }
      }
      
      let max = 0;
      
      for( let [k, v] of aaa) {
        if( v > max) {
          max = v , answer = k;
        }
      }
      return answer;
    }
      
