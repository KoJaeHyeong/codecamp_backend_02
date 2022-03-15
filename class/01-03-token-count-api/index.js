console.log("안녕하세요~~")

/* 1. 핸드폰 번호는 제대로 입력했니? ==> 하나의 API
   2. 토큰 6자리 생성하기 ==> 하나의 API
   3. 핸드폰에 토큰 전송하기 ===> 이런 함수들을 "API"라고 함.*/

function createTokenOfPhone(myphone) { // 무조건 주석을 달면 지저분하기때문에 이름을 잘 지어주는게 중요함!!!
    //1. 휴대폰번호 자릿수 맞는지 확인하기
    if(myphone.length !== 10 && myphone.length !== 11) {
        console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!")
        return;
    }

    //2. 핸드폰 토큰 6자리 만들기
    const mycount = 6
    if(mycount === undefined) {
        console.log("에러 발생!!! 갯수를 제대로 입력해 주세요!!!")
        return; //return이 없으면, 함수는 그대로 계속 구현 중!! ==> return을 써서 콘솔을 출력하고 여기서 멈춘다.
    } else if(mycount <= 0) {
        console.log("에러 발생!!! 갯수가 너무 적습니다!!!")
        return;
    } else if(mycount > 10) {
        console.log("에러 발생!!! 갯수가 너무 많습니다!!!")
        return; 
    }

    const result = String(Math.floor(Math.random() * 10**mycount)).padStart(mycount,"0") 
    console.log(result)

    //3. 핸드폰번호에 토큰 전송하기
    console.log(myphone + "번호로 인증번호" + result + "를 전송합니다!!")

}
            
createTokenOfPhone("01012345678") // myphone.length의 갯수때문!!
            

