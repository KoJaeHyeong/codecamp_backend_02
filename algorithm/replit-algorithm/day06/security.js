// 문자열로 된 주민번호가 주어졌을 때 주민번호 뒷자리 7자리를 '*'로 변경해 주는 함수를 만들어주세요.

function securityNumber(str){
    // padEnd 메서드와 substr 메서드를 사용해 보세요.
    let a = str.substr(0,7);
    return b = a.padEnd(14, "*");
  }
  
  let str = "991122-1111111";
  console.log(securityNumber(str)); //'991122-*******'
  
  // String.prototype.padStart는 문자열의 시작 부분에서부터 원하는 길이의 문자열로 채워 반환합니다.
  
  // const str = "5";
  
  // console.log(str.padStart(4,"I"));  //III5
  // console.log(str.padEnd(4,"I"));    //5III