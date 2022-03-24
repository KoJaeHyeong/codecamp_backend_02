import { checkValidationPhone, getToken, sendTokenToSMS} from './phone.js'
import { checkValidationEmail, getWelcomeTemplate, sendTemplateToEmail } from './email.js'
import express from 'express'
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js'
import mongoose from 'mongoose';
import { Phone } from './models/Auth.model.js'


import dotenv from 'dotenv'
dotenv.config()


const app = express();
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options))); // /swagger.json   이 내용을 swaggerDocument 여기에 넣어줘야함.


app.get('/boards', async (req, res) => { 
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기

  //Board.find({ writer: "철수" }) writer가 철수 인걸 꺼내와줘
  const result = await Board.find() 
  

  // 2. 꺼내온 결과 응답 주기
  res.send(result)
})


app.post('/boards', async (req, res) => {
  // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
  // 프론트로부터 데이터 받아오기
  
  const board = new Board({
    // writer: req.body.writer,
    // title: req.body.title,
    // contents: req.body.contents
    ...req.body
  })
  
  await board.save()
    
  // 2. 저장결과 알려주기!!
  res.send("인증완료!!")
})



app.post('/tokens/phone', async (req, res) => {
  const myphone = req.body.myphone
  let myToken = ""
  
  const isValid = checkValidationPhone(myphone)
  if(isValid) { //isValid가 true이면, ===if(true)
      
       myToken = getToken()
  
      sendTokenToSMS(myphone, myToken)
      res.send("인증완료!!")
  }

  if(await Phone.findOne({phone: myphone})) {
    await Phone.updateOne({myphone: myphone}, {token: myToken})
  } else {
      const token = new Phone({
      token: myToken,
      phone: myphone,
      isAuth: false
    })

    await token.save()
  }

})


app.patch('/tokens/phone', async (req, res) => {
  const myphone = req.body.phone
  let myToken = req.body.token

  if(await Phone.findOne({phone: myphone} && {token: myToken} && {isAuth: false})) {
    await Phone.updateOne({isAuth: false}, {isAuth: true})
    res.send("true")

  } else if(await Phone.updateOne({token: myToken}, {isAuth: false})) {
    
    res.send("false")

  }

  await token.save()
  
  res.send("true")
})


app.post('/users', (req, res) => {
    const myuser = req.body.user

      // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
    const isValid = checkValidationEmail(myuser.email) // user객체 안에 email 값
    if(isValid){
        // 2. 가입환영 템플릿 만들기
        const mytemplate = getWelcomeTemplate(myuser)

        // 3. 이메일에 가입환영 템플릿 전송하기
        sendTemplateToEmail(myuser.email, mytemplate)
        res.send("가입완료!!")
    }
})





// 몽고DB 접속!!
mongoose.connect("mongodb://my-database:27017/Tokens")



// Backend API서버 오픈!!(리슨)
app.listen(3001, () => { 
  console.log(`서버 연결 완료 띠리링🤪 ${3001}`)
}) 

