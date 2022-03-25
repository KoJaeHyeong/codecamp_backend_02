// 여기어때 크롤링 위법 사례 : https://biz.chosun.com/topics/law_firm/2021/09/29/OOBWHWT5ZBF7DESIRKNPYIODLA/
import mongoose from "mongoose"
import puppeteer from "puppeteer"
import { Stock } from "./stock.model.js"

// 몽고DB 접속!!
mongoose.connect("mongodb://localhost:27017/Jaehyeong")

async function startCrawling(){
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage() 
    await page.setViewport({ width: 1280, height: 720}) 
    await page.goto("https://finance.naver.com/item/sise.naver?code=005930")
    await page.waitForTimeout(100) 
    const framepage = await page.frames().find(el => el.url().includes("/item/sise_day.naver?code=005930")) // iframe 목록을 뽑아줌 - 찾아라 - url- iframe 안에 있기 때문에 html 에서 includes를 써서 찾아줘야함.


    for(let i=3; i <= 7; i++ ){
        await page.waitForTimeout(500)
        const date = await framepage.$eval(
            `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(1) > span`,
            (el) => el.textContent
        )
    
    
        const price = await framepage.$eval(
            `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(2) > span`,
            (el) => el.textContent
        )

        console.log(`날짜: ${date}, 가격: ${price}`)

        const stock = await new Stock({
            name: "재형왕국",
            date: date,
            price: Number(price.replace(",", "")) // 69,800인 문자열로 나와서 ','를 없애고 숫자타입으로 바꿔 준다.
        })

        await stock.save()
  
    }
    

    await browser.close() 

}                                                              

startCrawling()