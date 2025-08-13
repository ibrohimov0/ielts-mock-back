const mongoose = require("mongoose");

const schemaTest = new mongoose.Schema({
    name: String,
}, { timestamps: true });

const TestModel = mongoose.model("Test", schemaTest)

module.exports = TestModel