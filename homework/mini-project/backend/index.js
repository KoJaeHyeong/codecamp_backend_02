import { checkValidationPhone, getToken, sendTokenToSMS} from './phone.js'
import { checkValidationEmail, getWelcomeTemplate, sendTemplateToEmail } from './email.js'
import { createSiteAPI } from './cheerio.js'
import express from 'express'
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js'
import mongoose from 'mongoose';
import cors from 'cors';
import { Token } from './models/token.model.js'
import { User } from './models/user.model.js'
import { Starbucks } from './models/starbucks.model.js'


import dotenv from 'dotenv'


dotenv.config()


const app = express();
app.use(express.json())
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options))); // /swagger.json   이 내용을 swaggerDocument 여기에 넣어줘야함.


// 회원 목록 조회
app.get('/users', async (req, res) => { 
  

  const result = await User.find()

  
  res.send(result)
})


// 스타벅스 커피 목록 조회
app.get('/starbucks', async (req,res) => {
  
    const result = await Starbucks.find()

    res.send(result)
})


// 회원가입 API
app.post('/users', async (req, res) => {
  
  const myuser = req.body
  const num = myuser.personal
  const personalNum = await num.slice(0, 6) + "-" + "*".repeat(7) // 주민번호 뒷자리 마스킹
  const phoneIsauth = await Token.findOne({phone: myuser.phone}) 
  const preferSite = await createSiteAPI(myuser.prefer) // cheerio og객체
  

  if(phoneIsauth === null || phoneIsauth.isAuth === false) {
    res.status(422).send("에러!! 핸드폰 번호가 인증되지 않았습니다")

  } else {
    
    const user = new User({
      name: myuser.name,
      email: myuser.email,
      personal: personalNum,
      prefer: myuser.prefer,
      pwd: myuser.pwd,
      phone: myuser.phone,
      og: preferSite
    })

    await user.save()

    res.send(user._id)
    
    const isValid = checkValidationEmail(myuser.email) 
      if(isValid){
  
      const mytemplate = getWelcomeTemplate(myuser)

  
      sendTemplateToEmail(myuser.email, mytemplate)

      }

  }
})


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
    await Token.updateOne({phone: myphone}, {token: myToken})
    
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
        await Token.updateOne({token: myToken}, {isAuth: true})
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
app.listen(3001, () => { 
  console.log(`서버 연결 완료 띠리링🤪🤪🤪 ${3001}`)
}) 

