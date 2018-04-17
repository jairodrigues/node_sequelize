module.exports = function(app) {
    const PatnersRepository = app.repository.patners

    this.getPatners = async(req,res) => {
        try{
            const patners =  await PatnersRepository.get()
            const response = await res.json({patners: patners})
            return res.status(200).response
        }catch(err){
            res.status(412).json({msg: err.message})
        }
    }

    this.createPatners = async(req,res) => {
        try{
            const data = req.body
            const patner = await PatnersRepository.create(data)
            const response = await res.json(patner)
            return response
        }catch(err){
            res.status(412).json({msg: err.message})
        }
    }

    this.findPatners = async(req,res) => {
        try{
            const params = req.params
            const patner = await PatnersRepository.find(params)
            if(patner){
                res.json(patner)
            }else{
                res.sendStatus(404)
            }
        }catch(err){
          res.status(412).json({msg: err.message})
        }
    }

    this.putPatners = async(req, res) => {
      try{
        const params = req.params
        const body = req.body
        const patner = await PatnersRepository.put(body,params)
        return res.sendStatus(204)
      }catch(err){
        res.status(412).json({msg: err.message})
      }
    }

    this.deletePatner = async(req,res) => {
      try{
        const params = req.params
        const patner = await PatnersRepository.delete(params)
        return res.sendStatus(204)
      }catch(err){
        res.status(412).json({msg: err.message})
      }
    }

    return this

}
