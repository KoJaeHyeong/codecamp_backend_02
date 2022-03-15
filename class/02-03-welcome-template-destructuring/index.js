const apple = 3
const banana = 2

console.log("철수는 사과를 " + apple + "개, " + "바나나를 " + banana + "개 가지고 있습니다." )
console.log(`철수는 사과를 ${apple}개, 바나나를 ${banana}개 가지고 있습니다.`) // 탬플릿 리터럴

function getWelcomTemplate({myname, myage, myschool}) { // myuser값이 name에 들어간다.
    
    //여기서 오늘날짜로 만들기!!
    const aaa = new Date()
    const yyyy = aaa.getFullYear()
    const mm = aaa.getMonth() + 1
    const dd = aaa.getDate()
    const createdAt = `${yyyy}-${mm}-${dd}` //year + "-" + month + "-" + date 도 가능하지만, 백틱이 편하다^^

    return ` 
        <html>
            <body>
                <h1>${myname}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이름 : ${myname}</div>
                <div>나이 : ${myage}</div>
                <div>학교 : ${myschool}</div>
                <div>가입일 : ${createdAt}</div>
            </body>
        </html>
    `

}
const myuser = {
    myname: "철수",
    myage: 13,
    myschool: "다람쥐초등학교"  // 하드코딩 : 고정된 값을 넣는거
} 

const result = getWelcomTemplate(myuser)
console.log(result)

// aaa = myuser 로 들어간다.
// {myname, myage, myschool, mycreatedAt} = myuser  => aaa에 들어간다. ** 순서는 상관없다!!!

// api 만들기
