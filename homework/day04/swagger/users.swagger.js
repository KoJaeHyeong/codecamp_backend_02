/**
 * @swagger
 * /users:
 *      get:
 *          summary: 게시글 가져오기
 *          tags: [Board]
 *          parameters:
 *              - in: query
 *                name: number
 *                type: int
 *          responses:
 *              200:
 *                  description: 성공
 *                  content:
 *                      application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *                              type: object
 *                              properties:
 *                                  number:
 *	                                    type: int
 *	                                    example: 1
 *                                  writer:
 *	                                    type: string
 *	                                    example: 스파이더맨
 *                                  title:
 *	                                    type: string
 *	                                    example: 거미줄 발사~
 *                                  contents:
 *	                                    type: string
 *	                                    example: 내가짱이다!
 */