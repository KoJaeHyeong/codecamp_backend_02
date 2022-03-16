// 입력되는 숫자가 짝수인지 홀수인지 구별하는 함수를 만들려고 합니다. 

// 입력된 값이 "짝수"이면 "Even", "홀수"이면 "Odd", 0이면 "Zero"라는 문구를 띄워주세요.

// **`입력 인자`**

// - num은 0 이상인 자연수

// **`주의 사항`**

// - if는 함수 안에서 사용됩니다.
// - console.log("Even")으로 입력하면 "Even"이라는 값이 출력됩니다.

// **`예상 결과`**

// ```jsx
// evenOdd(12) // "Even"
// evenOdd(15) // "Odd"
// evenOdd(0)  // "Zero"
// ```


function evenOdd(num) {
	if(num === 0) { // 0일때를 생각해줘야 함 // 코드는 위에서 아래로 읽으니까 0을 먼저 계산해주자.
        console.log("Zero")
    } else if(num % 2 === 1) {
        console.log("Odd")
    } else if(num === 0){
        console.log("Even")
    }
}

evenOdd(0)