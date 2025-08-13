const jwt = require("jsonwebtoken");
const TestModel = require("../models/TestModel")

exports.getTests = async (req, res, next) => {
    return await TestModel.aggregate([
        { $sample: { size: 30 } }
    ]).then(tests => {
        res.status(200).json(tests)
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err)
    })
}