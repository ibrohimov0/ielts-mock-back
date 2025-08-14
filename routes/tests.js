const express = require('express');
const { getTests, postTest, patchTest, deleteTest, getAllTests } = require('../controllers/tests');
const router = express.Router();

/**
 * @swagger
 * /api/tests:
 *  get:
 *      tags:
 *          - tests
 *      description: Get 30 tests
 *      produces:
 *          - application/json
 *      responses:
 *          '200':  
 *              description: Successfully
 *          '400':
 *              description: Bad Request
 *          '404':
 *              description: Not Found
 *          '403':
 *              description: Forbidden
 *          '500':
 *              description: Internal Server Error  
*/
router.get('/tests', getTests)

/**
 * @swagger
 * /api/tests/all:
 *  get:
 *      tags:
 *          - tests
 *      security:
 *          - token: []
 *      description: Get All tests
 *      produces:
 *          - application/json
 *      responses:
 *          '200':  
 *              description: Successfully
 *          '400':
 *              description: Bad Request
 *          '404':
 *              description: Not Found
 *          '403':
 *              description: Forbidden
 *          '500':
 *              description: Internal Server Error  
*/
router.get('/tests/all', getAllTests)

/**
 * @swagger
 * /api/tests:
 *  post:
 *      tags:
 *          - tests
 *      security:
 *          - token: []
 *      description: Post Test
 *      produces:
 *          - application/json
 *      parameters:
 *        - in: body
 *          name: body
 *          description: Test question data
 *          required: true
 *          schema:
 *              type: object
 *              required:
 *                  - question
 *                  - options
 *              properties:
 *                  question:
 *                      type: string
 *                      example: What is the capital of USA?
 *                  options:
 *                      type: array
 *                      minItems: 4
 *                      maxItems: 4
 *                      items:
 *                          type: object
 *                          required:
 *                              - text
 *                              - isCorrect
 *                          properties:
 *                              text:
 *                                  type: string
 *                                  example: New York
 *                              isCorrect:
 *                                  type: boolean
 *                                  example: false
 *      responses:
 *          '200':  
 *              description: Successfully
 *          '400':
 *              description: Bad Request
 *          '404':
 *              description: Not Found
 *          '403':
 *              description: Forbidden
 *          '500':
 *              description: Internal Server Error  
 */
router.post('/tests', postTest)

/**
 * @swagger
 * /api/tests/{id}:
 *  patch:
 *      tags:
 *          - tests
 *      security:
 *          - token: []
 *      description: Update Test
 *      produces:
 *          - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Test ID
 *          type: string
 *        - in: body
 *          name: body
 *          description: Fields to Update
 *          required: true
 *          schema:
 *              type: object
 *              properties:
 *                  question:
 *                      type: string
 *                      example: Updated Question only
 *                  "options.0.text":
 *                      type: string
 *                      example: First option Updated
 *                  "options.1.isCorrect":
 *                      type: boolean
 *                      example: false
 *      responses:
 *          '200':  
 *              description: Successfully
 *          '400':
 *              description: Bad Request
 *          '404':
 *              description: Not Found
 *          '403':
 *              description: Forbidden
 *          '500':
 *              description: Internal Server Error  
 */
router.patch('/tests/:id', patchTest)

/**
 * @swagger
 * /api/tests/{id}:
 *  delete:
 *      tags:
 *          - tests
 *      security:
 *          - token: []
 *      description: Delete One Test
 *      produces:
 *          - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Test ID
 *          type: string
 *      responses:
 *          '200':  
 *              description: Successfully
 *          '400':
 *              description: Bad Request
 *          '404':
 *              description: Not Found
 *          '403':
 *              description: Forbidden
 *          '500':
 *              description: Internal Server Error  
*/
router.delete('/tests/:id', deleteTest)

module.exports = router;