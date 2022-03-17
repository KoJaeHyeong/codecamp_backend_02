import express from 'express'

const app = express() 

app.use(express.json()) // 문자열에서 객체로 바꿔주는 역할
app.get('/boards', (req, res) => { 
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  // console.log(req.body) // req.body하면 저 안에 있는 내용중 바디 값만 확인 가능(객체처럼)
  // const result = [
  //   { number: 1, writer: "철수", title: "제목입니다~~", contents: "내용이에요@@@"},
  //   { number: 1, writer: "철수", title: "제목입니다~~", contents: "내용이에요@@@"},
  //   { number: 1, writer: "철수", title: "제목입니다~~", contents: "내용이에요@@@"}
  // ]

  // 2. 꺼내온 결과 응답 주기
  res.send("조회에 성공하였습니다!!")
})

app.post('/boards', (req, res) => { 
  // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
  // 프론트엔드로부터 데이터 받아오기

  //2. 저장결과 알려주기!!
  res.send("등록에 성공하였습니다!!") 
})

// app.get('/boards', (req, res) => { 
//   res.send('Hello World!22') 
// })

// app.get('/boards/:id', (req, res) => { 
//   res.send('Hello World!22') 
// })

// app.get('/', (req, res) => { 
//   res.send('Hello World!22') 
// })

app.listen(3001, () => { 
  console.log(`Example app listening on port ${3001}`)
}) 

