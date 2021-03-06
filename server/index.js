//Modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config({path: "./../.env"});

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Test
app.get("/api/message/", (req, res) => {
    res.send({message: "Algorithm Visualizer"});
})

//Single Page
if(process.env.NODE_ENV === "production"){
    app.use(express.static(__dirname + "/build/"));
    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + "/public/index.html");
    })
}

//Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server runnig on port" + PORT);
})