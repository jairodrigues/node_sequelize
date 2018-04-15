module.exports = function(app) {
    const PatnersRepository = app.repository.patners
    
    this.getPatners = async (req,res) => {
        try{
            const patners =  await PatnersRepository.get()
            const response = await res.json({patners: patners})
            return response
        }catch(err){
            console.log(err)
        }
}

    return this

}
