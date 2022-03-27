// 문제 : N개의 자연수가 입력되면 각 자연수를 뒤집은 숫자가 소수인 것을 찾는 문제


const arr = [32, 55, 62, 20 ,250, 370, 200, 30, 10]

// 소수 판별(함수)
const isPrime = (num) => {
  if(num === 1) return false
  
  for(i = 2; i <= num / 2; i++) {
    if( num % i === 0) return false
  }
  
  return true
}


const solution = (arr) => {
	// 숫자 뒤집기
	const result = []
  
  arr.forEach((ele) => {
		  const reverseNum = Number(ele.toString().split("").reverse().join(""))  
   console.log(reverseNum) 
    
    //소수 판별
    if(isPrime(reverseNum)) {
      result.push(reverseNum)
    }
  })
  
  return result;
}


solution(arr) // [23, 2, 73, 2, 3]