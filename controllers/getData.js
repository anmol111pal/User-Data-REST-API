const User = require("../models/UserModel");

const getData = async (req, res) => {
    console.log("Requesting all the data...");
    const data = await User.find().limit(10);
    res.status(200).json(data);
}

const getDataByName = async (req, res) => {
    let name = req.params.name;
    name = name.charAt(0).toUpperCase() + name.substring(1);
    console.log("Finding user with name:", name);

    // const match = data.find((record) => name === record.name);
    const match = await User.find({name: name});

    if(match !== undefined) {
        res.status(200).json(match);
    } else {
        res.status(404).send("Data resource not found");
    }
}

const getDataByID = async (req, res) => {
    const id = parseInt(req.params.id);
    console.log("Requesting user data by ID", id);
    const match = await User.findById(id);
    
    res.status(200).json(match);
}

module.exports = {getData, getDataByName, getDataByID};