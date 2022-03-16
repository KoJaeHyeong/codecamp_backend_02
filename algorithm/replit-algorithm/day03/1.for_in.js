// 객체를 순회하며 key가 title이거나
// name일 경우 value를 대문자로 바꿔주세요.

const obj = {
    title: 'The Title',
    name: 'Jane',
    contents: 'Nothing to say'
  };
  
  for (let key in obj) {
    if(key === "title" || key === "name") {
        obj[key] = obj[key].toUpperCase()
      }
  }
  
  console.log(obj);
  // {
  //   title : "THE TITLE",
  //   name : "JANE",
  //   contents: "Nothing to say"
  // }
  
  
  // for-in
  
  // for-in을 사용하면 객체를 배열로 바꾸지 않고, 객체 자체에 반복문을 적용할 수도 있습니다. 
  
  // 즉, 객체 자료형에 자료들을 하나씩 꺼내고 싶을때 사용을 하게 되는데요.
  
  
    //     let book = {
    //       title: "자바스크립트 완벽하게 이해하기",
    //       price: 32000,
    //       author: "훈이",
    //       publisher: "자바스크립트짱짱",
    //     };
  
          // //key를 받는 변수명은 임의변경 가능
    //       //in 객체명
    //     for (key in book) {
    //       console.log(key, book[key]);
    //     }
  
    //  결과 : title: "자바스크립트 완벽하게 이해하기",
    //        price: 32000
    //        author: "훈이"
    //        publisher: "자바스크립트짱짱"
  
    // value = 객체명[키값]