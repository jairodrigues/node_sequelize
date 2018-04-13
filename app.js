var app = require('express')();
var consign = require('consign')

consign()
    .include("controllers")
    .then("routes")
    .into(app)

app.listen(3000, () => [
 console.log(`NTask API = porta 3000`)
])

app.get("/", (req,res) => {
  res.json({status: "TEST API"})
})
