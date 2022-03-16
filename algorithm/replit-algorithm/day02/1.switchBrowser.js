const browser = "Chrome";

if(browser === "Edge"){
  console.log("Edge는 일부 기능이 지원되지 않습니다.")
} else if (browser === "Chrome" || 
           browser === "Firefox"|| 
           browser === "Safati" || 
           browser === "Opera" ) {

  console.log("지원되는 브라우저입니다.")
} else {
  console.log("지원되지 않는 브라우저입니다.")
}

//'지원되는 브라우저입니다.'


// {}안을 scope라도 한다.
// 코드 블록 안 변수 = 지역 변수 = 지역 스코프를 갖는다.

// 함수 내에서 변수가 없으면, 밖에서 변수를 찾아온다.

//< switch-case > 
// if랑 비슷함.
// 선택할 옵션의 가지 수가 많고, 값 자체는 간단한 경우

// switch (표현식) {

//   case 1:
//     // 표현식의 값이 1일 경우 실행
//     break;

//   case 2:
//     // 표현식의 값이 2일 경우 실행
//     break;

//   case 3:
//     // 표현식의 값이 3일 경우 실행
//     break;

//   default:
//   // 1,2,3 모두가 아닐 때 실행

// }

// 단, break를 쓰지 않으면, 해당 케이스와 그 아래의 모든 케이스가 실행됨. 

// const browser = 'Chrome';

// switch (browser) {
//   case 'Edge':
//     console.log('Edge는 일부 기능이 지원되지 않습니다.');
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     console.log('지원되는 브라우저입니다.');
//     break;

//   default:
//     console.log('지원되지 않는 브라우저입니다.');
// }

// '지원되는 브라우저입니다.'

// 이 경우 browser가 Chrome, Firefox, Safari, Opera 중 하나일 경우 '지원되는 브라우저입니다.'라는 콘솔이 출력됩니다.