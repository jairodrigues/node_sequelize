module.exports = function(app){

    const Tasks = app.models.tasks
    const db = app.models.index

    this.get = async() => {
        return await db.Tasks.findAll({})
    }
    this.create = async(data) => {
        return await db.Tasks.create(data)
    }
    this.find = async(data) => {
        return await db.Tasks.findOne({where: data})
    }
    this.put = async(body,data) => {
      return await db.Tasks.update(body, {where: data})
    }
    this.delete = async(data) => {
      return await db.Tasks.destroy({where: data})
    }
    return this
}

