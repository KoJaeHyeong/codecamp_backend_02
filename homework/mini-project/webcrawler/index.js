// 여기어때 크롤링 위법 사례 : https://biz.chosun.com/topics/law_firm/2021/09/29/OOBWHWT5ZBF7DESIRKNPYIODLA/
import mongoose from "mongoose"
import puppeteer from "puppeteer"
import { Starbucks } from "./starbucks.model.js"

// 몽고DB 접속!!
mongoose.connect("mongodb://localhost:27017/Jaehyeong")

async function startCrawling(){
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage() 
    await page.setViewport({ width: 1280, height: 720}) 
    await page.goto("https://www.starbucks.co.kr/menu/drink_list.do")
    await page.waitForTimeout(100) 

    for(let i=1; i <=10; i++   ){
        await page.waitForTimeout(500)
        const name = await page.$eval(
            `#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(2) > ul > li:nth-child(${i}) > dl > dd`,
            (el) => el.textContent
        )

        const image = await page.$eval(
            `#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(2) > ul > li:nth-child(${i}) > dl > dt > a > img`,
            (el) => el.src
        )
        
        const starbucks = await new Starbucks({
            name: name,
            image: image
        })
        
        await starbucks.save()
    }                      
    
    await browser.close() 

}

startCrawling()