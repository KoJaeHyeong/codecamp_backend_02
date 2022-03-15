const apple = 3
const banana = 2

console.log("철수는 사과를 " + apple + "개, " + "바나나를 " + banana + "개 가지고 있습니다." )
console.log(`철수는 사과를 ${apple}개, 바나나를 ${banana}개 가지고 있습니다.`) // 탬플릿 리터럴

function getWelcomTemplate(name, age, school, createdAt) { // name에 myname이 할당됨
    
    return ` 
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이름 : ${name}</div>
                <div>나이 : ${age}</div>
                <div>학교 : ${school}</div>
                <div>가입일 : ${createdAt}</div>
            </body>
        </html>
    `  // 이 html을 return하겠다!!

}

const myname = "철수"
const myage = 13
const myschool = "다람쥐초등학교"
const mycreatedAt = "2020-01-02" // 밑에 값들을 변수로 바꾸기     변수 boolean 타입 : isChecked, hasApple 
//위 변수들이 밑 함수에 인자가 되고, 위 함수 매개변수로 들어간다.
getWelcomTemplate(myname, myage, myschool, mycreatedAt)


// 함수가 실행되고, return되고 종료되서 result에 함수가 할당 되고, 마지막으로 console 됨

