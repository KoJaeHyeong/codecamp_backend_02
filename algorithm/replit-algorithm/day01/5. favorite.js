// 자신의 제일 좋아하는 음식 세 가지를 출력하는 함수를 만들어주세요. 출력 예제는 다음과 같습니다. "제가 좋아하는 음식은 자장면, 치킨, 피자입니다."

function favoriteFood(foods){
    // Template literal을 사용해 보세요.
    let result = `제가 좋아하는 음식은 ${foods}입니다.`;
    return result;
  }
  
  let arr = ['자장면, 치킨, 피자'];
  console.log(favoriteFood(arr)); 
  // 제가 좋아하는 음식은 자장면, 치킨, 피자입니다.
  
  // Template Literals
  
  // Template Literal에서는 일반 문자열에서 사용하는 작은따옴표('')혹은 큰 따옴표("") 대신에 백틱(``)을 사용해 표현합니다. 표현식을 삽입하기 위해서는 ${ }으로 변수를 감싸줘야 합니다. 
  
  //일반 문자열에서는 개행이 허용X
  
  //백틱 문자열을 사용하면 개행이 허용
  
  // ex ) const filePath = String.raw`C:\\Development\\profile\\aboutme.html`;
  
  //console.log(`파일의 위치는 : ${filePath}`); //'파일의 위치는 : C:\\Development\\profile\\aboutme.html'