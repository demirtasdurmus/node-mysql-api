const path = require("path")
const express = require("express")
const cors = require('cors')
const morgan = require("morgan")

const app = express()

app.use(cors())
app.use(morgan("dev"))

module.exports = app