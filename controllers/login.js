const jwt = require('jsonwebtoken');

exports.postLogin = (req, res, next) => {
    if(!req.body.name || !req.body.password) {
        return res.status(400).json({ message: 'Name and password are required.' });
    }
}