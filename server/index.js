/* eslint-disable prettier/prettier */
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
app.use(cors())
const mongoose = require("mongoose")
const { response } = require("express")

app.get("/", function (req, res) {
	res.status(200).json("hii")
	return;
})

app.listen("5000", function (err) {
	if (err) console.log(err)
	else console.log("listening on port 5000")
})
