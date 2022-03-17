import express from 'express'
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js'

const app = express() 
app.use(express.json()) // json으로 읽어 오겠다(여기서는 raw형식의 json)

app.get('/boards', (req, res) => {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  const result = [
    { number: 1, writer: "재형", title: "뭘봐", contents: "어쩌라고"},
    { number: 2, writer: "토르", title: "번개의신", contents: "난 강하다"},
    { number: 3, writer: "훈이", title: "캡틴아메리카", contents: "세계 최강이 될거야"}
  ]

  res.send(result) // 변수로 지정해서 등록해주면 간편하고, 빨라진다.

  // 2. 꺼내온 결과 응답 주기
  // res.send("조회에 성공하였습니다!!")
})

app.post('/boards', (req, res) => { 
  // console.log(req.body); // 잘 전송됐는지 확인.
  // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
  // 프론트엔드로부터 데이터 받아오기

    // console.log(req.body.myphone); // 잘 있는지 확인!
    let myphone = req.body.myphone
  
    const isValid = checkValidationPhone(myphone)
    if(isValid) { //isValid가 true이면, ===if(true)
        
        const myToken = getToken()
    
        sendTokenToSMS(myphone, myToken)
    }



  //2. 저장결과 알려주기!!
  res.send("인증번호를 전송했습니다!") 
})

// app.get('/boards', (req, res) => { 
//   res.send('Hello World!22') 
// })

// app.get('/boards/:id', (req, res) => { 
//   res.send('Hello World!22') 
// })

// app.get('/', (req, res) => { 
//   res.send('Hello World!22') 
// })

app.listen(3001, () => { 
  console.log(`Example app listening on port ${3001}`)
}) 

