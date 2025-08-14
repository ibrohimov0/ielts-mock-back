const jwt = require("jsonwebtoken");
const TestModel = require("../models/TestModel")
const _ = require("lodash")

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

exports.postTest = async (req, res, next) => {
    try {
        await jwt.verify(req.headers.token, process.env.JWT_KEY)

        if (!req.body) {
            return res.status(400).json({ message: 'Body required!' });
        }

        const { options } = req.body

        if (!options || options.length !== 4) {
            return res.status(400).json({ error: 'Options must contain exactly 4 items' });
        }

        const trueContent = options.filter(opt => opt.isCorrect === true).length
        if (trueContent !== 1) {
            return res.status(400).json({ error: 'Exactly 1 option must be correct' });
        }

        return await TestModel.create(req.body).then(test => {
            res.status(200).json(test)
        }).catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500
            }
            next(err)
        })
    } catch {
        return res.status(403).json({ message: "Not Allowed! Forbidden" })
    }
}

exports.patchTest = async (req, res, next) => {
    try {
        await jwt.verify(req.headers.token, process.env.JWT_KEY)

        if (!req.body || !req.params.id) {
            return res.status(400).json({ message: 'ID and Body required!' });
        }

        const test = await TestModel.findById(req.params.id);
        if (!test) {
            return res.status(404).json({ message: 'Test not found!' });
        }

        for (let key in req.body) {
            _.set(test, key, req.body[key]);
        }

        const trueContent = test.options.filter(opt => opt.isCorrect === true).length
        if (trueContent !== 1) {
            return res.status(400).json({ error: 'Exactly 1 option must be correct' });
        }

        return await TestModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).then(test => {
            res.status(200).json(test)
        }).catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500
            }
            next(err)
        })
    } catch {
        return res.status(403).json({ message: "Not Allowed! Forbidden" })
    }
}

exports.deleteTest = async (req, res, next) => {
    // return await TestModel.().then(test => {
    //     res.status(200).json(test)
    // }).catch(err => {
    //     if (!err.statusCode) {
    //         err.statusCode = 500
    //     }
    //     next(err)
    // })
}