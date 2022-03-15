/*
  어떤 게임의 평점이 담긴 객체가 있습니다. 
  난이도별로 객체를 만들어, 배열 result에 담아 출력할 수 있도록
  for문을 완성해주세요.
  
  [ {난이도 : 점수}, {난이도 : 점수}, ... ]
*/

const score = {
    easy: 234,
    normal: 759,
    hard: 677,
    nightmare: 46
  };
  
  const arr = Object.entries(score); // 객체를 배열 하나의 키와 값                                       으로 배열함
  console.log(arr);
  // [
  //   [ 'easy', 234 ],
  //   [ 'normal', 759 ],
  //   [ 'hard', 677 ],
  //   [ 'nightmare', 46 ]
  // ]
  
  //이 값을 객체로 바꾸어 배열에 할당시키면 됨 === 구조분해할당
  
  let result = [];
  
  // for문을 완성해주세요.
  for(i=0; i < arr.length; i++){
    let [level, score] = arr[i]; //구조분해할당 한 후
    obj = {}; // 객체로 호출해야 하기 때문에 객체 생성
    obj[level] = score; // obj[요소] 안에 값은 score라고 할당;
    result.push(obj)
  }
  
  
  console.log("결과", result);
  // [ { easy: 234 }, { normal: 759 }, { hard: 677 }, { nightmare: 46 } ]
  
  // 구조분해할당 = 객체 불러오는걸 간편하게 해줌
  //             우리가 여러 데이터를 한 상자에 담았던 것을 다시 분해해서 
  //             새로운 상자에 나눠 담는 것이 구조 분해 할당 
  
  // 이름과 성을 요소로 가진 배열
  // let arr = ["Bora", "Lee"]
  
  // 구조 분해 할당을 이용해
  // firstName엔 arr[0]을
  // surname엔 arr[1]을 할당하였습니다.
  // let [firstName, surname] = arr;
  
  // alert(firstName); // Bora
  // alert(surname);  // Lee
  
  //구조 분해 할당이란 명칭은 어떤 것을 복사한 이후에 변수로 '분해(destructurize)'해준다는 의미 때문에 붙여졌습니다. 이 과정에서 분해 대상은 수정 또는 파괴되지 않습니다.
  
//   ex)
  
//   let A = [1, 2, 3, 4]
//   let b = {};
  
//   b[0] = "철수"
  
//   console.log(b) // { '0': '철수' }