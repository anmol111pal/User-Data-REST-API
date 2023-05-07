const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/route.js");
const connection = require("./connection.js");
const app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

connection(); // conecting to the db

app.use("/", router);

app.use(express.urlencoded({extended:true}));

app.listen(PORT, () => {
    console.log("Server running.");
});