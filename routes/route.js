const express = require("express");
const {getData, getDataByID, getDataByName} = require("../controllers/getData");
const {createUser, updateUser} = require("../controllers/uploadData");
const router = express.Router();

router.get("/", (req, res)=> {
    res.send("<h1>Welcome to the User Data API</h1><a href = '/data/users/'>Click here to hit the endpoint</a>");
});

router.get("/data/users", getData);

router.get("/data/users/:name", getDataByName);

router.get("/data/users/:id", getDataByID);

router.post("/data/users/", createUser);

router.patch("/data/users/:id", updateUser);

router.get("*", (req, res) => {
    console.log("Requested endpoint: ", req.url, " does not exist.");
    res.send(req.url + " : No such endpoint exists");
});

module.exports = router;