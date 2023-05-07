const mongoose = require("mongoose");
require("dotenv").config()

const users = require("./models/UserModel");
const username = "anmol111pal";

const password = process.env.PASSWORD;
const url = `mongodb+srv://${username}:${password}@user-data-cluster.ecazuib.mongodb.net/user-data`;

async function connect() {
    let conn;
    try {
        console.log("Connecting to the DB.");
        conn = await mongoose.connect(url, {useNewUrlParser: true});

        if (conn) {
            console.log("Connection done !");
        }

    }
    catch (e) {
        console.log("Error: ", e);
    }

    return conn;
}

module.exports = connect;