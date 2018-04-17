module.exports = function(app){
    const Patners = app.models.patners
    const db = app.models.index

    this.get = async() => {
        return await db.Patners.findAll({})
    }
    this.create = async(data) => {
        return await db.Patners.create(data)
    }
    this.find = async(data) => {
        return await db.Patners.findOne({where: data})
    }
    this.put = async(body,data) => {
      return await db.Patners.update(body, {where: data})
    }
    this.delete = async(data) => {
      return await db.Patners.destroy({where: data})
    }
    return this
}

