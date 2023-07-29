const express = require("express");
const path = require("path")
const app = express();
const port = 5000;


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./signup.tsx"))
})

app.listen(port, (req, res) => {
    console.log(`Server is Working: ${port}`)
})

