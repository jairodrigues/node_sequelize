import express from 'express'
import consign from 'consign'

var app = express();

consign()
    .include("models/index.js")
    .then("repository")
    .then("controllers")
    .then("routes")
    .into(app)

app.listen(3000, () => [
 console.log(`NTask API = porta 3000`)
])

app.get("/", (req,res) => {
  res.json({status: "TEST API"})
})
