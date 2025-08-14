const mongoose = require("mongoose");

const schemaTest = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options:{
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
        ]
    }
}, { timestamps: true });

const TestModel = mongoose.model("Test", schemaTest)

module.exports = TestModel