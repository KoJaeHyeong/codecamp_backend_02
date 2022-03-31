import { checkValidationPhone, getToken, sendTokenToSMS} from './phone.js'
import express from 'express'
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js'
import mongoose from 'mongoose';
import cors from 'cors';
import { Token } from './models/token.model.js'
import { Starbucks } from './models/starbucks.model.js'
import { List } from './controllers/userlist.js';
import { Login } from './controllers/loginfinish.js'

import dotenv from 'dotenv'




dotenv.config()


const app = express();
app.use(express.json())
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options))); // /swagger.json   이 내용을 swaggerDocument 여기에 넣어줘야함.


// 회원 목록 조회, userlist
const listUser = new List()
app.get('/users', listUser.list)


// 스타벅스 커피 목록 조회
app.get('/starbucks', async (req,res) => {
  
    const result = await Starbucks.find()

    res.send(result)
})


// 회원가입 API, loginfinish
const login = new Login()
app.post('/users', login.conFirm)


// 토큰 인증 요청 API
app.post('/tokens/phone', async (req, res) => {
  const myphone = req.body.phone
  let myToken = ""

  const isValid = checkValidationPhone(myphone)
  if(isValid) { //isValid가 true이면, ===if(true)
      
      myToken = getToken()
  
      sendTokenToSMS(myphone, myToken)
      res.send("인증완료!!")
  }

  if(await Token.findOne({phone: myphone})) {
    await Token.updateMany({phone: myphone}, {token: myToken})
    
  } else {
      const dbToken = new Token({
        token: myToken,
        phone: myphone,
        isAuth: false 
  })

  await dbToken.save()
}

})


// 인증완료 API
app.patch('/tokens/phone', async (req, res) => {
  const myphone = req.body.phone
  let myToken = req.body.token

  if(await Token.findOne({token: myToken})){
    if (await Token.findOne({phone: myphone})) {
        await Token.updateMany({token: myToken}, {isAuth: true})
        return res.send("true")  
    } else {
      
        return res.send("false")
    }
  
  } else {
        return res.send("false")
  }
  
})



// 몽고DB 접속!!
mongoose.connect("mongodb://my-database:27017/Jaehyeong")



// Backend API서버 오픈!!(리슨)
app.listen(3000, () => { 
  console.log(`서버 연결 완료 띠리링🤪🤪🤪 ${3000}`)
}) 

