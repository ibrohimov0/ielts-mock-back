const express = require('express');
const router = express.Router();
const { postLogin } = require('../controllers/login');

/**
 * @swagger
 * /api/login:
 *  post:
 *      tags:
 *          - login
 *      description: Admin Login
 *      produces:
 *          - application/json
 *      parameters:
 *        - in: body
 *          name: Get Name
 *          password: Get Password
 *          schema:
 *              type: object
 *              required:
 *                  - name
 *                  - password
 *              properties:
 *                  name:
 *                      type: string
 *                  password:
 *                      type: string
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
router.post('/login',postLogin)

module.exports = router;