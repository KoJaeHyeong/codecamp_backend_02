// import { CashService } from './services/cash.service.js'
// import { ProductService } from './services/product.service.js'

export class ProductController {
    constructor(moneyService, productService){
        this.moneyService = moneyService // 받은 머니 서비스
        this.productService = productService // index에서 받은 프로덕트 서비스
    }

    buyProduct = (req,res) => {
          // 1. 고객 가진돈 검증하는 코드(10줄 => 2줄)
        // const cashService = new CashService()
        const hasMoney = this.moneyService.checkValue() // 이렇게 바꾸면서 위에 new로 만든 객체는 필요가 없다!
        

        // 2. 판매여부 검증 하는 코드 (대략 10줄 정도)
        // const productService = new ProductService() //
        const isSoldout = this.productService.checkSoldout() 
        

        // 3. 상품 구매하는 코드
        if(hasMoney === true && !isSoldout){ // 돈이 있고, 상품 판매가 완료되지 않았다면! / !를 붙여서 저런식으로도 표현 가능!
            res.send("상품 구매 완료했다이가!!")    
        }
    }

    refundProduct = (req,res) => {
        // 1. 판매여부 검증하는 코드 (대략 10줄 정도)
        // const productService = new ProductService() // 객체를 하나의 인스턴스라고도 한다.
        const isSoldout = this.productService.checkSoldout() // true 또는 false 리턴

        // 2. 상품을 환불하는 코드 (대략 10줄 정도)
        if(isSoldout) { // 판매가 완료되었다!
            res.send("상품 환불했다이가!!")
        }    
    }
}