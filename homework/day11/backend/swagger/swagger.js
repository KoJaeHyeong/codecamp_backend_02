/**
 * @swagger
 * /tokens/phone:
 *      post:
 *         summary: 토큰 전송
 *         tags: [Token]
 *         requestBody:
 *                  required: true
 *                  content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *
 *         responses:
 *             200:
 *                 description: token 전송
 *                 content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                 token:
 *                                     type: string
 *                                     example: "450960"
 *                                 phone:
 *                                     type: string
 *                                     example: "01041433965"
 */


/**
 * @swagger
 * /tokens/phone:
 *      patch:
 *         summary: 인증 완료
 *         tags: [Token]
 *         requestBody:
 *                  required: true
 *                  content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *
 *         responses:
 *             200:
 *                 description: token 인증 확인
 *                 content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                 token:
 *                                     type: string
 *                                     example: "450960"
 *                                 phone:
 *                                     type: string
 *                                     example: "01041433965"
 *                                 isAuth:
 *                                     type: boolean
 *                                     example: true
 */

/**
 * @swagger
 * /users:
 *    get:
 *     tags:
 *       - General
 *     summary: localhost:3001/users
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json: 
 *               schema:
 *                    type: object
 */

/**
 * @swagger
 * /users:
 *      post:
 *         summary: 회원가입
 *         tags: [User]
 *         requestBody:
 *                  required: true
 *                  content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *
 *         responses:
 *             200:
 *                 description: 회원가입 완료
 *                 content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                 _id:
 *                                     type: string
 *                                     example: "6240680908f271ff327d5963"
 */

/**
 * @swagger
 * /starbucks:
 *      get:
 *         summary: 스타벅스 커피 목록 조회
 *         tags: [Starbucks]
 *         requestBody:
 *                  required: true
 *                  content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *
 *         responses:
 *             200:
 *                 description: 회원가입 완료
 *                 content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                 _id:
 *                                     type: string
 *                                     example: "6240680908f271ff327d5963"
 *                                 name:
 *                                     type: string
 *                                     example: "나이트토 바닐라 크림"
 *                                 img:
 *                                     type: string
 *                                     example: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg"
 */

