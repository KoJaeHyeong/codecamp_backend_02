/* 

    문제
    
    단방향성 Linked List 를 직접 구현해보세요.
    추가할 데이터들을 나타내는 배열 strArr 를 매개변수로 받고
    추가된 리스트에서 추가, 삭제 등을 적용할 문자열이 담긴 배열 actions 를 받을 때
    총 종합된 결과로 완성된 Linked List 전체를 리턴해주세요.

    
    !! 리턴되는 결과값은 객체 형태의 Linked List 여야 합니다.
    !! Linked List 의 데이터들은 
       이름 : { next : "다음 대상" } 형태여야 합니다.
    !! actions 의 원소는 반드시 문자열 형태를 받습니다.
    !! actions 의 문자열 첫번째는 Remove 또는 Insert 가 들어옵니다.
    !! actions 의 문자열 두번째는 제거하거나 추가될 대상입니다.
    !! actions 의 문자열 첫번째가 Insert 일 경우
       두번째 문자열에 해당되는 데이터를 마지막에 추가합니다.
    !! actions 의 문자열 첫번째가 Remove 일 경우
       두번째 문자열에 해당되는 데이터를 삭제합니다.
    !! 데이터를 추가 또는 삭제했을 경우 이전 또는 다음의 데이터에 영향을 줄 수도 있습니다.
    

    예시 ) strArr 매개변수로 ["철수", "훈이", "영희", "맹구"] 를 받아오고
          actions 데이터로 [ "Remove 훈이", "Insert Junny" ] 를 받습니다.

          strArr 에 있는 각각의 문자열 데이터들을 각각 데이터에 저장하면
          {
            철수 : { next : "훈이" },
            훈이 : { next : "영희" },
            영희 : { next : "맹구" },
            맹구 : { next : null }
          }
          와 같은 형태를 가지게 됩니다.

          이때 actions 데이터로 받아오는 문자열에 따라 데이터를 삭제, 추가 합니다.
          문자열 형태는 [ 행동, 대상, 추가 데이터(옵션) ] 으로 받을 수 있는데
          행동은 Remove, Insert 두가지 중 하나만 받아옵니다.

          Remove 일 경우에는 대상으로 해당되는 데이터를 삭제하며,
          Insert 일 경우에는 추가할 데이터를 마지막에 추가합니다.

          첫번째 문자열에 Remove 가 포함되어 있으므로
          리스트 안에 있는 "훈이" 데이터를 삭제하면 아래와 같은 리스트로 구성됩니다.

          {
            철수 : { next : "영희" },
            영희 : { next : "맹구" },
            맹구 : { next : null }
          }

          이 리스트에서 Insert 행동까지 적용한다면
          맹구 데이터 뒤에 "Junny" 데이터를 새로 추가하면 아래의 리스트가 구성됩니다.

          {
            철수 : { next : "영희" },
            영희 : { next : "맹구" },
            맹구 : { next : "Junny" }
            Junny : { next : null }
          }

          최종적으로 완성된 단방향성 Linked List 전체를 리턴해주세요.

    ----

    입력 예시

    1. linkedList_01(
      ["철수", "훈이", "영희", "맹구"],
      [ "Remove 훈이", "Insert Junny" ]
    )

    2. linkedList_01(
      ["철수", "훈이", "영희", "맹구"],
      [ "Remove 훈이", "Insert Junny", "Remove 영희", "Remove 맹구" ]
    )

    ----

    출력 예시

    1.  {
          철수 : { next : "영희" },
          영희 : { next : "맹구" },
          맹구 : { next : "Junny" }
          Junny : { next : null } 
        }
      
    2. {
          '철수': { next: 'Junny' }, 
          Junny: { next: null }
        }

*/

function linkedList_01(arr, act) {
  // 여기에 코드를 작성하세요.

  // 1. 객체에 담을 거기 때문에 빈 객체 설정
  let obj = {};

  for (i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      obj[arr[i]] = { next: null }; // 마지막 요소의 next값 null 설정
      console.log(obj);
    } else {
      obj[arr[i]] = { next: arr[i + 1] }; // 마지막 요소가 아닐때에 객체값
    }
  }

  // 2. act로 인한 값 설정
  for (el of act) {
    console.log(el);
    let action = el.split(' ')[0]; // Remove,Insert
    let name = el.split(' ')[1]; //훈이,Junny
    console.log(action);
    console.log(name);

    // 3. act값에 의한 Remove
    if (action === 'Remove') {
      let next = obj[name].next;
      console.log(next); // 훈이의 next
      for (key in obj) {
        if (obj[key].next === name) {
          // 철수의 next가 훈이라면?
          console.log(key);
          obj[key].next = next; // 철수의 next는 영희가 된다.
          break;
        }
      }
      delete obj[name];
      console.log(obj);

      // Insert인 경우
    } else if (action === 'Insert') {
      let addName;
      for (key in obj) {
        if (obj[key].next === null) {
          addName = key;
          console.log(addName);
          break;
        }
      }
      console.log(name);
      obj[addName].next = name;
      obj[name] = { next: null };
    }
  }
  return obj;
}

module.exports = linkedList_01;
