const mongoose = require("mongoose");

const schemaTest = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: {
        type: [
            {
                text: {
                    type: String,
                    required: true
                },
                isCorrect: {
                    type: Boolean,
                    required: true
                }
            }
        ],
        validate: [
            {
                validator: arr => arr.length === 4,
                message: "Options must contain exactly 4 items"
            },
            {
                validator: arr => arr.filter(opt => opt.isCorrect).length === 1,
                message: "Exactly 1 option must be correct"
            }
        ]
    }
}, { timestamps: true });

const TestModel = mongoose.model("Test", schemaTest)

module.exports = TestModel