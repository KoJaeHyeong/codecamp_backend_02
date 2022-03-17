import express from 'express'

const app = express() // app이 express라는 기능을 가지게 된다.

// GET 요청이 들어왔을 때

app.get('/', (req, res) => {
  res.send('Hello World!') // 응답 보내기
})  // 이것이 api 하나

app.listen(3001, () => { // 3001번 포트에서 실행
  console.log(`Example app listening on port ${3001}`)
}) 

// 이 전체가 api가 있는 서버 프로그램이다.

//node_module은 서버 돌릴때 필요함
