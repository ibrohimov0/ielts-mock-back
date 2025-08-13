const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/data:
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
router.get('/tests',)

module.exports = router;