import express from 'express'
import { checkValidationPhone, getToken, sendTokenToSMS} from './phone.js'
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js'






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

/**
 * @openapi
 * /:
 *   post:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */


app.post('/tokens/phone', (req, res) => { 
  // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
  
  //2. 저장결과 알려주기!!
  res.send("등록에 성공하였습니다!!") 
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


// app.get('/boards', (req, res) => { 
//   res.send('Hello World!22') 
// })

// app.get('/boards/:id', (req, res) => { 
//   console.log(req)
//   res.send('Hello World!22') 
// })

// app.get('/', (req, res) => { 
//   console.log(req)
//   res.send('Hello World!22') 
// })

app.listen(3001, () => { 
  console.log(`Example app listening on port ${3001}`)
}) 

