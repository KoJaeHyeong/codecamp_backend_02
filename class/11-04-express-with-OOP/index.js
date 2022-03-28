import express from 'express'
import { CashService } from './cash.js'
import { ProductService } from './product.js'

const app = express()


// 상품 구매하기 API
app.post("/products/buy", (req,res) => { // Class를 써서 줄였다.
    // 1. 고객 가진돈 검증하는 코드(10줄 => 2줄)
    const cashService = new CashService()
    const hasMoney = cashService.checkValue() // true 또는 false 리턴

    // 2. 판매여부 검증 하는 코드 (대략 10줄 정도)
    const productService = new ProductService() // 객체를 하나의 인스턴스라고도 한다.
    const isSoldout = productService.checkSoldout() // true 또는 false 리턴
    

    // 3. 상품 구매하는 코드
    if(hasMoney === true && !isSoldout){ // 돈이 있고, 상품 판매가 완료되지 않았다면! / !를 붙여서 저런식으로도 표현 가능!
        res.send("상품 구매 완료했다이가!!")    
   }
    
})


// 상품 환불하기 API
app.post("/products/refund", (req,res) => {
    // 1. 판매여부 검증하는 코드 (대략 10줄 정도)
    const productService = new ProductService() // 객체를 하나의 인스턴스라고도 한다.
    const isSoldout = productService.checkSoldout() // true 또는 false 리턴

    // 2. 상품을 환불하는 코드 (대략 10줄 정도)
    if(isSoldout) { // 판매가 완료되었다!
        res.send("상품 환불했다이가!!")
    }
    
})

app.listen(3000)