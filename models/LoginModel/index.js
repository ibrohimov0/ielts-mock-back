const mongoose = require("mongoose");

const schemaLogin = new mongoose.Schema({
    name: String,
    password: String
}, { timestamps: true });

const LoginModel = mongoose.model("Login", schemaLogin)

module.exports = LoginModel