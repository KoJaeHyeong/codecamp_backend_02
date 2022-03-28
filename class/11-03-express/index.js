import express from 'express'

const app = express()


// 상품 구매하기 API
app.post("/products/buy", (req,res) => {
    // 1. 고객 가진돈 검증하는 코드 (대략 10줄 정도)
    // ...
    // ...
    // ...
    // ...

    // 2. 판매여부 검증 하는 코드 (대략 10줄 정도)
    // ...
    // ...
    // ...
    // ...

    // 3. 상품 구매하는 코드
    // if(돈있음 && 판매중){
        res.send("상품 구매 완료했다이가!!")    
   // }
    
})


// 상품 환불하기 API
app.post("/products/refund", (req,res) => {
    // 1. 판매여부 검증하는 코드 (대략 10줄 정도)
    // ...
    // ...
    // ...
    // ...

    // 2. 상품을 환불하는 코드 (대략 10줄 정도)
    // if(!판매중) {
        res.send("상품 환불했다이가!!")
    // }
    
})

app.listen(3000)