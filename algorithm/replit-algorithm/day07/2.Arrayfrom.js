// 배열의 길이를 지정하면, 배열의 짝수번째 인덱스는 2로 홀수번째는 3인 배열을 생성하는 함수를 만들어주세요. 


// function array(n){
    
//   let arr = Array.from({length: n}, (v,i) => i);

//   arr.forEach((num, i) => {
// 		if(num % 2 === 0) {
//       	arr[i] = 2;
//     } else {
//       	arr[i] = 3;
//     }
//   })
  
//   return arr;
// }

// console.log(array(10)); //[ 2, 3, 2, 3, 2, 3, 2, 3, 2, 3 ]

// 배열의 길이를 지정하면, 배열의 짝수번째 인덱스는 2로 홀수번째는 3인 배열을 생성하는 함수를 만들어주세요. 


function array(n){
    // Array.from을 사용해주세요.
    let arr = Array.from({length: n}, () => 3);
  
    arr.forEach((num, i) => {
          if( i % 2 === 0 ){ 
          arr[i] = 2;
      } else {
          arr[i] = 3;
      }
    })
    
              return arr;  
      }     
  
  console.log(array(10)); //[ 2, 3, 2, 3, 2, 3, 2, 3, 2, 3 ]