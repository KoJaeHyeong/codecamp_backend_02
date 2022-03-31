import { User } from '../models/user.model.js'
import { Token } from '../models/token.model.js'
import { createSiteAPI } from '../cheerio.js'
import { SendEmail } from './services/login.service.js'

export class Login {
    
    conFirm = async (req, res) => {
  
        const myuser = req.body
        const num = myuser.personal
        const personalNum = await num.slice(0, 6) + "-" + "*".repeat(7) // 주민번호 뒷자리 마스킹
        const error = await Token.findOne({phone: myuser.phone}) 
        const preferSite = await createSiteAPI(myuser.prefer) // cheerio og객체
        
      
        if(error === null || error.isAuth === false) {
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
      
          user.save()
      
          res.send(user._id)
          
          //email.js - service
          const email = new SendEmail()
          email.resEmail
        }
    }
}