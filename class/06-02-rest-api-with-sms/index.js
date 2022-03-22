import express from 'express'
import { checkValidationPhone, getToken, sendTokenToSMS} from './phone.js'
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js'

import dotenv from 'dotenv'
dotenv.config()


const app = express();
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options))); // /swagger.json   이 내용을 swaggerDocument 여기에 넣어줘야함.


app.get('/boards', (req, res) => { 
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  const result = [
    { number: 1, writer: "재형", title: "뭘봐", contents: "어쩌라고"},
    { number: 2, writer: "토르", title: "번개의신", contents: "난 강하다"},
    { number: 3, writer: "훈이", title: "캡틴아메리카", contents: "세계 최강이 될거야"}
  ]

  // 2. 꺼내온 결과 응답 주기
  res.send(result)
})


app.post('/tokens/phone', (req, res) => {
  const myphone = req.body.myphone
  
  const isValid = checkValidationPhone(myphone)
  if(isValid) { //isValid가 true이면, ===if(true)
      
      const myToken = getToken()
  
      sendTokenToSMS(myphone, myToken)
      res.send("인증완료!!")
  }
})

app.listen(3001, () => { 
  console.log(`Example app listening on port ${3001}`)
}) 

