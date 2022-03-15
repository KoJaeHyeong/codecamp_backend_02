function checkValidationEmail(email){
    if(email === undefined || !email.includes("@")){
        console.log("에러발생!! 이메일을 제대로 입력해 주세요!!!!")
        return false
    } else {
        return true
    }
}

function getWelcomeTemplate({name, email, authNumber, phoneNumber, linkHtml}){ 
    
    const aaa = new Date()
    const yyyy = aaa.getFullYear()
    const mm = String(aaa.getMonth() + 1).padStart(2, "0")
    const dd = String(aaa.getDate()).padStart(2, "0")
    const today = `${yyyy}-${mm}-${dd}` // year + "-" + month + "-" + date
    
    return `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>이메일: ${email}</div>
                <div>주민번호: ${authNumber}</div>
                <div>내가 좋아하는 사이트: ${linkHtml}</div>
                <div>가입일: ${today}</div>
            </body>
        </html>
    `
}

function sendTemplateToEmail(email, mytemplate){ // 어차피 객체니까 매개변수가 바뀌어도 그 값은 그대로 유지
    console.log(email + "이메일로" + mytemplate + "를 전송합니다.")
}

function createUser(user){ // user = myuser
    // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
    const isValid = checkValidationEmail(user.email) // user객체 안에 email 값
    if(isValid){
        // 2. 가입환영 템플릿 만들기
        const mytemplate = getWelcomeTemplate(user)

        // 3. 이메일에 가입환영 템플릿 전송하기
        sendTemplateToEmail(user.email, mytemplate)
    }
}

const myuser = {
    name: "고재형",
    email: "jaehyeong@gmail.com",
    authNumber: "940415-1******",
    phoneNumber: "010-4143-3965",
    linkHtml: "www.naver.com"
}
createUser(myuser)