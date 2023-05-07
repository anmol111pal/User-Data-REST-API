const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
    _id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    company_name: {
        type: String,
        // required: true
    },
    avatar: {
        type: String, 
        // required: true
    }
});

const User = new mongoose.model("User", userSchema);

module.exports = User;