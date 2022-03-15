console.log("안녕하세요~~")

function getToken() { // 재사용성이 떨어진다....
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6,"0") 
    console.log(result)
}

getToken()  

// < 함수 선언하기 >

// function add() { // 더하기 기능
//     const a = 1
//     const b = 2

//     const result = a + b 
// }

// add()
// --------------------------------------------------

// ===> < 추가 해서 재사용성 넣기 >

//     function add(a , b) {  a, b - 매개변수(Parameter)
//         const result = a + b
//     }                                    // 스코프(Scope, 범위)는 괄호 안을 말함./ 매개변수 값이 없으면, 그 위로 가서 찾는다 = scope chain

//  add(1, 2)  1, 2- 인자(Argument)

// ** 실무규칙 ** 
// ==> 하나의 함수는 하나의 기능만!!!

// return : 결과 반환, 함수 종료

// ----------------------------------------------------------





