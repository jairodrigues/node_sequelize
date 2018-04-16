module.exports = function(app){
    const Patners = app.models.patners
    const db = app.models.index

    this.get = async() => {
        return await db.Patners.findAll({})
    }
    this.create = async(data) => {
        return await db.Patners.create(data)
    }
    return this
}

