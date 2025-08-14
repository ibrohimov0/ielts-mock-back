const mongoose = require("mongoose");

const schemaLogin = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

const LoginModel = mongoose.model("Login", schemaLogin)

module.exports = LoginModel