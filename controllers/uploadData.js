const User = require("../models/UserModel");

const createUser = async (req, res) => {
    const data = req.body;

    console.log("Creating User record...");
    console.log(data);

    await User.create(data);
    console.log("User record created!");

    res.status(201).json({"code": 201, "message": "User created sucessfully", ...data});
}

const updateUser = async (req, res) => {
    const id = req.params.id;

    const data = req.body;
    console.log("Update User request for user id : ", id);
    console.log(data);

    await User.findByIdAndUpdate(id, {$set: {...data}});
    console.log("User data updated");

    res.send("Update req received...");
}

module.exports = {createUser, updateUser};