import axios from 'axios'


export function checkValidationPhone(myphone) {
    if(myphone.length !== 10 && myphone.length !== 11) {
        console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!")
        return false;
    } else {
        return true;
    }
} 

export function getToken() {
    const mycount = 6
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

}

export async function sendTokenToSMS(myphone, myToken) {
    
    const appKey = process.env.SMS_APP_KEY
    const XSecretKey = process.env.SMS_X_SECRET_KEY
    const sender = process.env.SMS_SENDER

    const result = await axios.post(`https://api-sms.cloud.toast.com/sms/v3.0/appKeys/${appKey}/sender/sms`, 
        {
            body: `재형아 오늘도 화이팅!! 인증번호는 ${myToken}`,
            sendNo: sender,
            recipientList: [{ internationalRecipientNo: myphone }] // 번호 설정
        }, 
        {
            headers: {
                "Content-Type": "application/json;charset=UTF-8", // 가운데 - 이게 들어가 문자열로 감싸줘야함. 원래는 안해도 됨.
                "X-Secret-Key": XSecretKey
        }
        })
    
    
    
    
    console.log("전송 완료!!")
    
    
    // console.log(myphone + "번호로 인증번호" + myToken + "를 전송합니다!!")
}
