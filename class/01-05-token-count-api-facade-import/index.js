// module 방식 (,치고 "type":"module"하는거 잊지말자)
import { checkValidationPhone, getToken, sendTokenToSMS} from './phone.js'

// commonjs 방식
// const { checkValidationPhone} = require('./phone.js')
// 잘 사용 안함.

function createTokenOfPhone(myphone) { 
    
    const isValid = checkValidationPhone(myphone)
    if(isValid) { //isValid가 true이면, ===if(true)
        
        const myToken = getToken()
    
        sendTokenToSMS(myphone, myToken)
    }
}
            
createTokenOfPhone("01012345671")

