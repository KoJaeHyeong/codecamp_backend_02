// 문자열로 이루어진 두 배열이 주어졌을 때 두 배열에 모두 갖고 있는 문자의 개수를 출력하는 함수를 만들어주세요.


function common(arr1, arr2){
    // Set 객체를 사용해주세요.
    let setA = new Set(a)
    let setB = new Set(b)
    let result = new Set([...setB].filter(el => setA.has(el)))
    
    return result.size;
  }
  let a = ['a', 'b', 'c', 'c', 'b'];
  let b = ['b', 'b', 'b', 'c', 'e', 'e', 'f'];
  console.log(common(a, b)); // 2
  
  // set 객체는 중복되지 않는 유일한 값들의 집합입니다. 
  
  // 주로 Set 객체를 배열 안에서 중복되는 요소들을 제거하기 위해서 사용합니다. 따라서 Set 객체를 생성하지 않고 중복 요소를 제거하는 방법과 Set 객체를 사용해 중복 요소를 제거하는 방법을 소개해드리겠습니다.
  
  // ### 요소 추가 &  삭제
  
  // ```jsx
  // const set = new Set();
  // console.log(set); // Set(0) {}
  
  // set.add(1);
  // console.log(set); // Set(1) {1}
  
  // set.add(2).add(3);
  // console.log(set); // Set(3) {1, 2, 3}
  
  // set.add(2);
  // console.log(set); // Set(3) {1, 2, 3}
  
  // set.delete(2); //true
  // console.log(set); // Set(3) {1, 3}
  
  // set.clear();
  // console.log(set); // Set(0) {}
  // ```
  
  // 생성된 Set 객체에 요소를 추가하기 위해서 Set.prototype.add 메서드를 사용합니다. add 메서드를 연속적으로 사용해 여러 요소를 추가할 수 있습니다. 또 중복 요소 추가는 허용하지 않습니다.
  
  // Set 객체 특정 요소를 삭제하려면 Set.prototype.delete 메서드를 사용하며 삭제 여부는 불리언 값으로 반환합니다. 모든 요소를 일괄 삭제할 때는 Set.protorype.clear 메서드를 사용하며, 언제나 undefined을 반환합니다.