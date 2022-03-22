/**
 * @swagger
 * /starbucks:
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
 *	                                    example: 빽다방
 *                                  title:
 *	                                    type: string
 *	                                    example: 우리 빽다방 이용해주세요
 *                                  contents:
 *	                                    type: string
 *	                                    example: 맛있게 타드릴게
 */