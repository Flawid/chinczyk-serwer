const express = require("express");
const app = express()
const port = process.env.PORT || 3000;

app.get("/", (req,res) => {
    res.send("Witaj na serwerze")
})

app.listen(port, () => console.log("Serwer started on Port " + port))