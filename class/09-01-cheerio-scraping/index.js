import axios from 'axios'
import cheerio from 'cheerio'


async function createBoardAPI(mydata) {
    
    const targetURL = mydata.contents.split(" ").filter((el) => el.startsWith("http"))[0] // 여기서 하나씩 돌면서 http로 시작되는 애를 뽑아준다


    const aaa = await axios.get(targetURL) // 위에서 만든 targetURL을 넣어준다.
    console.log(aaa.data) // 데이터 부분
    const $ = cheerio.load(aaa.data) // cheerio로 불러오기
    $("meta").each((_, el ) => { // 각각에 대해서 화살표 함수가 실행된다. , _ 는 각각의 메타태그를 말하고, el은 메타태그의 요소를 말한다.
        if($(el).attr('property')) {
            const key = $(el).attr('property').split(":")[1] // attr: 요소중 속성을 찾을거다!, title부분
            const value = $(el).attr('content')  // content 내용
            console.log(key, value)
        }
    }) //내가 찾고 싶은 태그
}

const frontendData = { // 프론트에서 보내는 데이터
    title: "안녕하세요~~",
    contents: "여기 정말 좋다!! 여기가 어디냐고? 네이버라고 알아? https://naver.com 이다 ㅡㅡ"
}

createBoardAPI(frontendData)