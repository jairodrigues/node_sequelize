var express = require('express')
var consign = require('consign')
var app = express()

app.listen(3000, () => [
 console.log(`NTask API = porta 3000`)
])

app.get("/", (req,res) => {
  res.json({status: "TEST API"})
})
