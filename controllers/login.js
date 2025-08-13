const jwt = require('jsonwebtoken');
const LoginModel = require('../models/LoginModel');

exports.postLogin = async(req, res, next) => {
    if(!req.body.name || !req.body.password) {
        return res.status(400).json({ message: 'Name and password are required!' });
    }
    return await LoginModel.find(req.body).then(async(data) => {
        if(data.length > 0) {
            data.map(async(e) => {
                const token = await jwt.sign({id: e.id,name: e.name,password: e.password}, process.env.JWT_KEY)
                res.status(200).json({data: e,token})
            })
        } else {
            res.status(404).json({status: 404, message: "Admin Not Found"})
        }
    }).catch(err => {
        if(!err.statusCode) {
            err.statusCode = 500
        }
        next(err)
    })
}