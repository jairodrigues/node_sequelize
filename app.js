import express from 'express'
import consign from 'consign'
import db from './models/index'

var app = express();

consign({cwd: 'app'})
    .include("models")
    .then("repository")
    .include("routes")
    .into(app)

app.listen(3000, () => [
 console.log(`NTask API = porta 3000`)
])

app.get("/", (req,res) => {
  res.json({status: "TEST API"})
})
