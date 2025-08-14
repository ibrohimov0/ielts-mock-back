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

exports.postTest = async(req,res,next) => {
    return await TestModel.().then(test => {
        res.status(200).json(test)
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err)
    })
}

exports.patchTest = async(req,res,next) => {
    return await TestModel.().then(test => {
        res.status(200).json(test)
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err)
    })
}

exports.deleteTest = async(req,res,next) => {
    return await TestModel.().then(test => {
        res.status(200).json(test)
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err)
    })
}