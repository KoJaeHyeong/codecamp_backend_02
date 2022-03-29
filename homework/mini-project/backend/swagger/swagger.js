/**
 * @swagger
 * /tokens/phone:
 *   post:
 *     tags:
 *       - Token
 *     summary: 토큰 전송
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               phone: '01041433965'
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *          application/json: 
 *           schema:
 *             type: object
 *             example: 인증완료!!
 */

/**
 * @swagger
 * /tokens/phone:
 *  patch:
 *     tags:
 *       - Token
 *     summary: 토큰 인증
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               token: '320772'
 *               phone: '01041433965'
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *          application/json: 
 *           schema:
 *             type: object
 *             example: true           
 */

/**
 * @swagger
 * /users:
 *  post:
 *     tags:
 *       - User
 *     summary: 회원가입 유저정보
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               name: 고재형
 *               email: kojae2423@naver.com
 *               personal: 940415-1932909
 *               prefer: https://naver.com
 *               pwd: '1234'
 *               phone: '01041433965'
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json: 
 *            schema:
 *             type: object
 *             example: "62426f20678d96cde2379130"
 */ 

/**
 * @swagger
 * /users:
 *  get:
 *     tags:
 *       - User
 *     summary: 유저정보 조회
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json: 
 *            schema:
 *             type: array
 *             example: [
 *                          {
 *                             "_id": "624270c70d365af3f1bd54ea",
 *                             "name": "고재형",
 *                             "email": "kojae2423@naver.com",
 *                             "personal": "940415-*******",
 *                             "prefer": "https://naver.com",
 *                             "pwd": "1234",
 *                             "phone": "01041433965",
 *                             "og": {
 *                                     "title": "네이버",
 *                                     "description": "네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요",
 *                                     "image": "https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png"
 *                                   },
 *                             "__v": 0
 *                          }
 *                       ]
 */

/**
 * @swagger
 * /starbucks:
 *  get:
 *     tags:
 *       - Starbucks
 *     summary: 커피 목록 조회
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *            schema:
 *             type: array
 *             example: 
 *                   [
 *                       {
 *                           "_id": "6242718758f5c99b7dbbed3e",
 *                           "name": "나이트로 바닐라 크림",
 *                           "image": "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg",
 *                           "__v": 0
 *                       },
 *                       {
 *                           "_id": "6242718758f5c99b7dbbed40",
 *                           "name": "나이트로 콜드 브루",
 *                           "image": "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg",
 *                           "__v": 0
 *                       },
 *                       {
 *                           "_id": "6242718858f5c99b7dbbed42",
 *                           "name": "돌체 콜드 브루",
 *                           "image": "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg",
 *                           "__v": 0
 *                       },
 *                       {
 *                           "_id": "6242718858f5c99b7dbbed44",
 *                           "name": "미드나잇 베르가못 콜드 브루",
 *                           "image": "https://image.istarbucks.co.kr/upload/store/skuimg/2022/03/[9200000003273]_20220310085016224.jpg",
 *                           "__v": 0
 *                       },
 *                       {
 *                           "_id": "6242718958f5c99b7dbbed46",
 *                           "name": "바닐라 크림 콜드 브루",
 *                           "image": "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg",
 *                           "__v": 0
 *                       },
 *                       {
 *                           "_id": "6242718958f5c99b7dbbed48",
 *                           "name": "벨벳 다크 모카 나이트로",
 *                           "image": "https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003509]_20210322093452399.jpg",
 *                           "__v": 0
 *                       },
 *                       {
 *                           "_id": "6242718a58f5c99b7dbbed4a",
 *                           "name": "시그니처 더 블랙 콜드 브루",
 *                           "image": "https://image.istarbucks.co.kr/upload/store/skuimg/2021/08/[9200000003661]_20210819094346176.jpg",
 *                           "__v": 0
 *                       },
 *                       {
 *                           "_id": "6242718a58f5c99b7dbbed4c",
 *                           "name": "제주 비자림 콜드 브루",
 *                           "image": "https://image.istarbucks.co.kr/upload/store/skuimg/2022/03/[9200000002672]_20220311105511600.jpg",
 *                           "__v": 0
 *                       },
 *                       {
 *                           "_id": "6242718b58f5c99b7dbbed4e",
 *                           "name": "콜드 브루",
 *                           "image": "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg",
 *                           "__v": 0
 *                       },
 *                       {
 *                           "_id": "6242718b58f5c99b7dbbed50",
 *                           "name": "콜드 브루 몰트",
 *                           "image": "https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600536.jpg",
 *                           "__v": 0
 *                       }
 *                   ]
 */ 