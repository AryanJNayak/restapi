const express = require("express");
require("./db/conn");
const studentRouter = require("./routers/students");
const Students = require("./models/students");

const app = express();
const port = process.env.PORT || 80;

app.use(express.json());
app.use(studentRouter);

app.listen(port, "127.0.0.1", () => {
    console.log("listening...")
})