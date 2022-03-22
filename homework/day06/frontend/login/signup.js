// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector('#ValidationInputWrapper').style.display = 'flex'

  const num1 = document.getElementById("PhoneNumber01").value 
  const num2 = document.getElementById("PhoneNumber02").value 
  const num3 = document.getElementById("PhoneNumber03").value 
  
  const authNumber = num1 + num2 + num3;

  await axios.post('http://localhost:3000/tokens/phone', {
     authNumber
  })
  .then((res) => {

    console.log(res)
    console.log('인증 번호 전송')
  
  })

}




// 회원 가입 API 요청
const submitSignup = async () => {
  const authName = document.getElementById("SignupName").value
  const authNum = document.getElementById("SignupPersonal").value
  const phoneNumber1 = document.getElementById("PhoneNumber01").value 
  const phoneNumber2 = document.getElementById("PhoneNumber02").value 
  const phoneNumber3 = document.getElementById("PhoneNumber03").value 
  const phoneNumber = phoneNumber1 + phoneNumber2 + phoneNumber3;
  const site = document.getElementById("SignupPrefer").value
  const authEmail = document.getElementById("SignupEmail").value
  const password = document.getElementById("SignupPwd").value


  await axios.post('http://localhost:3000/users', {
    authName, 
    phoneNumber,
    site,
    password, 
    authEmail
 })
 .then((res) => {

    
  console.log(res)
  console.log('회원 가입 이메일 전송')
 })
}
