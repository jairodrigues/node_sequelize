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
        console.log(req)
        let data = req.body
        const patner = await PatnersRepository.create(data)
        const response = await res.json({patner: patner})
        return res.status(200).response
      }catch(err){
        res.status(412).json({msg: err.message})
      }
    }

    return this

}
