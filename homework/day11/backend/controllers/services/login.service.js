import { checkValidationEmail, getWelcomeTemplate, sendTemplateToEmail } from '../../email.js'

export class SendEmail {

    resEmail = () => {
            const isValid = checkValidationEmail(myuser.email) 
            if(isValid){
            const mytemplate = getWelcomeTemplate(myuser)
      
            sendTemplateToEmail(myuser.email, mytemplate)
      
            }
    }
}