import express from 'express'
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js'
import cors from 'cors'


const app = express()
app.use(cors())
app.use(express.json())
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));


app.get('/users', (req, res) => {

    const result = [
        { 
            email : "jaehyeong1586@gmail.com", 
            name : "매력재형",
            phone : "01041433965",
            personal : "221210-2222222",
            prefer : "https://yahoo.com"
        },
        { 
            email : "asd@gmail.com", 
            name : "캡틴아메리카",
            phone : "01012345632",
            personal : "220110-2232222",
            prefer : "https://gmail.com"
        },
        { 
            email : "a43@gmail.com", 
            name : "스파이더맨",
            phone : "01012345678",
            personal : "220540-2222222",
            prefer : "https://naver.com"
        },
        { 
            email : "aa67@gmail.com", 
            name : "토르",
            phone : "01012245678",
            personal : "211110-2222222",
            prefer : "https://naver.com"
        },
        { 
            email : "a32@gmail.com", 
            name : "블랙팬서",
            phone : "01012235678",
            personal : "225410-2222222",
            prefer : "https://gmail.com"
        }
    ]




    // console.log(result)

    //2. 저장결과 알려주기!!
    res.send(result)
})

// 2. 커피목록 조회
app.get('/starbucks', (req, res) => {
    
    const data = [
        { name: '퐁당치노(바닐라)', kcal: 100 },
        { name: '아메리카노', kcal: 4 },
        { name: '쿠키크런치 빽스치노', kcal: 190 },
        { name: '몽땅쉐이크', kcal: 90 },
        { name: '카라멜 마끼아또', kcal: 80 },
        { name: '카페모카', kcal: 12 },
        { name: '바닐라라떼', kcal: 76 },
        { name: '토피넛라떼', kcal: 89 },
        { name: '녹차라떼', kcal: 80 },
        { name: '에스프레소', kcal: 30 },
    ]


    // console.log(result)
    //2. 저장결과 알려주기!!
    res.send(data)
})

// app.post('/testAxios', (req, res) => {
//     console.log('checked_post');  //그냥 수신 확인용으로 추가
//     console.log(req.body.data);


//     res.send('완료');
// })

// app.get('/testAxios', (req, res) => {
//     console.log('checked_get');

//     console.log(req.body);

//     res.send("이제 다 된거야?");
// })


app.listen(3000, () => {
    console.log(`연결했어용😤 ${3000}`)
})