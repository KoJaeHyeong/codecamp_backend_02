// 인자로 받은 문자열을 분류해서 기존에 있는 컬렉션에 개수를 더해주는 함수를 만들어 주세요.


function classification(str){
    let map = new Map([['A',1],['B',2],['C',3]]);
    // Map객체의 메서드를 사용해보세요.
    for( el of str) {
        map.set(el, map.get(el) + 1)
      }
        return map;
    }
    
  
  
  var str = "ABCCCAA"
  console.log(classification(str)); //Map(3){'A' => 4, 'B' => 3, 'C' => 6}
  
  // map을 이용해서 key,value로 이루어진 새로욱 객체를 생성.
  // Map() 은 자바스크립트의 key-value 페어(pair) 로 이루어진 컬렉션
  // key 를 사용해서 value 를 get, set 할 수 있음
  // key 들은 중복될 수 없음: 하나의 key 에는 하나의 value 만
  // key 로 사용할 수 있는 데이터형: string, symbol(ES6), object, function >> number 는 사용할 수 없음에 주의!
  
  // 새로운 map 을 만들고 map 에 key, value 엔트리를 추가
  // let me = new Map();
  // me.set('name', 'kevin');
  // me.set('age', 28);
  // console.log(me.get('age'); // 28
  // // 대괄호를 사용해서 map 을 선언하는 방법
  // const roomTypeMap = new Map(
  //   [
  //     ["01", "원룸(오픈형)"],
  //     ["02", "원룸(분리형)"],
  //     ["03", "원룸(복층형)"],
  //     ["04", "투룸"],
  //     ["05", "쓰리룸"]
  //   ]
  // );
  // 새로운 map 을 만들고 그 데이터를 기존의 [key, value] 페어컬렉션으로 채움
  // let you = new Map().set('name', 'paul').set('age', 34);
  // console.log(you.get('name')); // 'paul'
  // has(): 주어진 key 가 존재하는지 확인
  // console.log(me.has('name')); // true
  // size: map 에 담겨진 엔트리의 개수를 조회
  // console.log(you.size); // 2
  // delete(): 엔트리를 삭제
  // me.delete('age');
  // console.log(me.has('age')); // false
  // clear(): 모든 엔트리를 삭제
  // you.clear();
  // console.log(you.size); // 0