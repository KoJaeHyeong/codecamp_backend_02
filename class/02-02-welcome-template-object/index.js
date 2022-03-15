const apple = 3
const banana = 2

console.log("철수는 사과를 " + apple + "개, " + "바나나를 " + banana + "개 가지고 있습니다." )
console.log(`철수는 사과를 ${apple}개, 바나나를 ${banana}개 가지고 있습니다.`) // 탬플릿 리터럴

function getWelcomTemplate(name, age, school, createdAt, a) { // myuser값이 name에 들어간다.
    
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
    `

}
const myuser = {
    myname: "철수",
    myage: 13,
    myschool: "다람쥐초등학교",
    mycreatedAt: "2020-01-02"  // 변수를 하나로 묶어줌
}
getWelcomTemplate(myuser)  

// 구조분해할당(비구조할당) => 객체를 구조분해 할거면, {}달고, 배열은 []를 달자. 양쪽이 같게!!

// 객체는 순서가 없다!!, 그 안에 key와 value가 중요한거임!! ==> 안에 있는 키를 뽑아서 만드는 거다.
// 배열은 순서가 존재!! ==> 배열 위치가 중요함!!

