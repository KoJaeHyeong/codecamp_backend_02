// ### index.js에서 `reverseStr` 함수를 만들어주세요.

//  `reverseStr` 함수는 배열을 인자로 받아서 배열의 요소들을 반전시켜 주고 만약 요소의 하나가 대문자일 경우 소문자로 소문자일 경우 대문자로 변환하여 결과를 `String`형태로 반환 해주세요.

// - `reverseStr`이라는 이름의 함수를 만들어주세요. 임의의 배열을 인자로 받습니다.
// - 인자 이름은 원하는 대로 지어주셔도 됩니다.
// - `reverseStr` 함수에서 인자로 받은 배열을 반전시켜주세요.
// - 인자로 받은 배열의 요소 하나하나를 탐색해서 만약 대분자는 소문자로 소문자는 대문자로 변환해 주세요.
// - 결과를 `String`형태로 반환해 주세요.

// **참고사항**
// - 아스키코드를 사용해서 접근해 보세요.
// - 문자열을 아스키코드 번호로 변환할 때는 `.charCodeAt() 메서드`를 사용합니다.
// - 알파벳 대문자 아스키코드번호는 65~90번이며, 알파벳 소문자 아스키코드번호는 97~122입니다.

// **입력예제**
// - ["cODECAMP", "iS", "tHIS", "eVERYONE", "hELLO"]

// **출력예제**
// - 'Hello Everyone This Is Codecamp'

const reverseStr = (list)=>{
    let answer = '';
    list.reverse()
      for(i=0; i < list.length; i++){
          for(j=0; j < list[i].length; j++){
          if(list[i][j].charCodeAt() > 92) {
            answer += list[i][j].toUpperCase()
          } else {
            answer += list[i][j].toLowerCase()
          }
        }
        answer += " "
      }
  
    return answer.trimEnd()
  }