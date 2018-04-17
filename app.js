import express from 'express'
import consign from 'consign'

var app = express();

consign()
    .include("models/index.js")
    .then("config/middlewares.js")
    .then("repository")
    .then("controllers")
    .then("routes")
    .then("config/boot.js")
    .into(app)

app.get("/", (req,res) => {
  res.json({status: "TEST API"})
})
