import {getToday} from './utils.js'

export function checkValidationEmail(email){
    if(email === undefined || !email.includes("@")){
        console.log("에러발생!! 이메일을 제대로 입력해 주세요!!!!")
        return false
    } else {
        return true
    }
}

export function getWelcomeTemplate({name, age, school}){ // user = {name, age, school} 이 됨.
    return `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>나이: ${age}살</div>
                <div>학교: ${school}</div>
                <div>가입일: ${getToday()}</div>
            </body>
        </html>
    `
}

export function sendTemplateToEmail(email, mytemplate){ // 어차피 객체니까 매개변수가 바뀌어도 그 값은 그대로 유지
    console.log(email + "이메일로" + mytemplate + "를 전송합니다.")
}