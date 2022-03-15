// 핸드폰 번호는 제대로 입력했니?
// 토큰 6자리 생성하기
// 핸드폰에 토큰 전송하기 ==> 하나의 API

function checkValidationPhone(myphone) { // ===> 1번째, API
    // 휴대폰번호 자릿수 맞는지 확인
    if(myphone.length !== 10 && myphone.length !== 11) {
        console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!")
        return false;  //  return false는 이 if문이 호출되면 false를 반환해 여기서 함수를 멈춘다.
    } else {
        return true;
    }
}
        
//핸드폰 토큰 6자리 생성
function getToken() {
    const mycount = 6;
    if(mycount === undefined) {
        console.log("에러 발생!!! 갯수를 제대로 입력해 주세요!!!")
        return;
    } else if(mycount <= 0) {
        console.log("에러 발생!!! 갯수가 너무 적습니다!!!")
        return;
    } else if(mycount > 10) {
        console.log("에러 발생!!! 갯수가 너무 많습니다!!!")
        return;
    }
    const result = String(Math.floor(Math.random() * 10**mycount)).padStart(mycount,"0") 
    return result;
    // console.log(result)

}

function sendTokenToSMS(myphone, myToken) { // ===> 3번째, API
    console.log(myphone + "번호로 인증번호" + myToken + "를 전송합니다!!")
}

// API / 파사드(껍데기)

function createTokenOfPhone(myphone) { 
    
    const isValid = checkValidationPhone(myphone)
    if(isValid) { //isValid가 true이면, ===if(true)
        
        const myToken = getToken()
    
        sendTokenToSMS(myphone, myToken)
    }
}
            
createTokenOfPhone("01012345671")
            

