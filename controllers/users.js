module.exports = function(app) {
    const UsersRepository = app.repository.users

    this.getUsers = async(req,res) => {
        try{
            const Users =  await UsersRepository.get()
            const response = await res.json({Users: Users})
            return res.status(200).response
        }catch(err){
            res.status(412).json({msg: err.message})
        }
    }

    this.createUser = async(req,res) => {
        try{
            const data = req.body
            const Users = await UsersRepository.create(data)
            const response = await res.json(Users)
            return response
        }catch(err){
            res.status(412).json({msg: err.message})
        }
    }

    this.findUser = async(req,res) => {
        try{
            const params = req.params
            const user = await UsersRepository.find(params)
            if(user){
                res.json(user)
            }else{
                res.sendStatus(404)
            }
        }catch(err){
          res.status(412).json({msg: err.message})
        }
    }

    this.putUser = async(req, res) => {
      try{
        const params = req.params
        const body = req.body
        await UsersRepository.put(body,params)
        return res.sendStatus(204)
      }catch(err){
        res.status(412).json({msg: err.message})
      }
    }

    this.deleteUser = async(req,res) => {
      try{
        const params = req.params
        await UsersRepository.delete(params)
        return res.sendStatus(204)
      }catch(err){
        res.status(412).json({msg: err.message})
      }
    }

    return this

}
