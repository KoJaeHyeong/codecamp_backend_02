// 여기어때 크롤링 위법 사례 : https://biz.chosun.com/topics/law_firm/2021/09/29/OOBWHWT5ZBF7DESIRKNPYIODLA/

import puppeteer from "puppeteer"

async function startCrawling(){
    const browser = await puppeteer.launch({ headless: false }) // puppeteer 안의 브라우저를 실행할거다., headless는 브라우저가 없다! false하면 나타난다. 할때 마다 await 걸어줘야함
    const page = await browser.newPage() // 페이지를 열어준다.                       
    await page.setViewport({ width: 1280, height: 720}) // 페이지 크기
    await page.goto("https://www.goodchoice.kr/product/search/2")
    await page.waitForTimeout(1000) // 계속 요청을 하면 차단할 수 있으니까,,, 시간 텀을 준다.

    const stage = await page.$eval(
         "#poduct_list_area > li:nth-child(2) > a > div > div.name > div > span",
          (el) => el.textContent
    ) //eval 검증하겠다!, el = 우리가 찾은 셀렉터
    await page.waitForTimeout(1000)

    const location = await page.$eval(
        "#poduct_list_area > li:nth-child(2) > a > div > div.name > p:nth-child(4)",
        (el) => el.textContent
    )
    await page.waitForTimeout(1000)

    const price = await page.$eval(
        "#poduct_list_area > li:nth-child(2) > a > div > div.price > p > b",
        (el) => el.textContent
    )
    await page.waitForTimeout(1000)
   
        console.log(stage)
        console.log(location.trim()) // trim은 그냥 공백 없애려고 넣은거
        console.log(price)

        await browser.close() // 끝나고 나면 브라우저 종료를 해주자

}                                                              

startCrawling()