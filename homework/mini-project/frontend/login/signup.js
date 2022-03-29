// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  
  const num1 = document.getElementById("PhoneNumber01").value 
  const num2 = document.getElementById("PhoneNumber02").value 
  const num3 = document.getElementById("PhoneNumber03").value 
  
  const phone = num1 + num2 + num3;

  await axios.post('http://localhost:3001/tokens/phone', {
    phone
 })
 .then((res) => {

   console.log(res)
   console.log('인증 번호 전송')
 
 })

}

// 핸드폰 인증 완료 API 요청
const submitToken = async () => {
  
  const token = document.getElementById("TokenInput").value
  const num1 = document.getElementById("PhoneNumber01").value 
  const num2 = document.getElementById("PhoneNumber02").value 
  const num3 = document.getElementById("PhoneNumber03").value 
  const phone = num1 + num2 + num3;

  await axios.patch('http://localhost:3001/tokens/phone', {
    phone,
    token  
  })
  .then((res) => {
    
    console.log(res)
    console.log('핸드폰 인증 완료')
  })
}



// 회원 가입 API 요청
const submitSignup = async () => {
  const name = document.getElementById("SignupName").value
  const authNum1 = document.getElementById("SignupPersonal1").value
  const authNum2 = document.getElementById("SignupPersonal2").value
  const personal = authNum1 + authNum2
  const num1 = document.getElementById("PhoneNumber01").value 
  const num2 = document.getElementById("PhoneNumber02").value 
  const num3 = document.getElementById("PhoneNumber03").value 
  const phone = num1 + num2 + num3;
  const prefer = document.getElementById("SignupPrefer").value
  const email = document.getElementById("SignupEmail").value
  const pwd = document.getElementById("SignupPwd").value

  await axios.post('http://localhost:3001/users', { 
      name, personal, phone, prefer, email, pwd
  
 })
 .then((res) => {

    
  console.log(res)
  console.log('회원 가입 완료')
 })

}
