import {authLength, authSign, authConvert, finish} from './resident-registration-number.js'

function authcheck(num) {
    const isValid = authLength(num)
    
    if(isValid) {
        const afterNum = authConvert(num)
        finish(afterNum)
    }
}

authcheck("940415-1932828")