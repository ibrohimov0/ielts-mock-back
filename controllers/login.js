const jwt = require('jsonwebtoken');
const LoginModel = require('../models/LoginModel');

exports.postLogin = async(req, res, next) => {
    if(!req.body.name || !req.body.password) {
        return res.status(400).json({ message: 'Name and password are required.' });
    }

    return await LoginModel.find(req.body).then(async(data) => {
        if(data.length > 0) {
            data.map(async(e) => {
                const token = await jwt.sign({id: e.id,name: e.name,password: e.password}, process.env.JWT_KEY)
            })
        }
    })
}