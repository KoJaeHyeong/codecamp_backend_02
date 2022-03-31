import {getToday} from './utils.js'
import axios from 'axios'

export function checkValidationEmail(email){
    if(email === undefined || !email.includes("@")){
        console.log("에러발생!! 이메일을 제대로 입력해 주세요!!!!")
        return false
    } else {
        return true
    }
}

export function getWelcomeTemplate({name, phone, prefer}){ // user = {name, age, school} 이 됨.
    return `
        <html>
            <body>
                <h1>${name}님 가입을 오지게 축하해^^ 하하하ㅏ</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>전화번호: ${phone}</div>
                <div>좋아하는 사이트: ${prefer}</div>
                <div>가입일: ${getToday()}</div>
            </body>
        </html>
    `
}

export async function sendTemplateToEmail(email, mytemplate){
    const appKey = process.env.EMAIL_APP_KEY
    const XSecretKey = process.env.EMAIL_X_SECRET_KEY
    const sender = process.env.EMAIL_SENDER

    const result = await axios.post(
        `https://api-mail.cloud.toast.com/email/v2.0/appKeys/${appKey}/sender/mail`, 
        {
            senderAddress: sender,
            title: "안녕하세요!! 재형아, 가입을 오지게 환영한다.^^",
            body: mytemplate,
            receiverList: [{receiveMailAddr: email, receiveType: "MRT0" }]
        },
        {
            headers: {
                "Content-Type": "application/json;charset=UTF-8", // 가운데 - 이게 들어가 문자열로 감싸줘야함. 원래는 안해도 됨.
                "X-Secret-Key": XSecretKey
        }
        }

    )
    
    console.log("전송 끝!!!!")

    // console.log(email + "이메일로" + mytemplate + "를 전송합니다.")
}