const Patners = app.models.patners
const db = app.models.index

async function findAll(req,res) {
    let patners = await db.Patners.findAll({})
    let result = await res.json({patners: patners})
    return result
}

async function create(req,res){
  let patner = await db.Patners.create({
    name: 'Teste'
  })
}

module.exports = {
    findAll:findAll,
    create:create
}
