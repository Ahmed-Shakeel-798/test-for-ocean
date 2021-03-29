const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/initialize', (req, res) => {
    res.send({ msg: "Hello world" });
})

app.listen(PORT, () => {
    console.log("up and running on " + PORT);
})