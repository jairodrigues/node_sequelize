module.exports = function(app){

    const Users = app.models.users
    const db = app.models.index

    this.get = async() => {
        return await db.Users.findAll({})
    }
    this.create = async(data) => {
        return await db.User.create(data)
    }
    this.find = async(data) => {
        return await db.User.findOne({where: data})
    }
    this.put = async(body,data) => {
      return await db.User.update(body, {where: data})
    }
    this.delete = async(data) => {
      return await db.User.destroy({where: data})
    }
    return this
}

