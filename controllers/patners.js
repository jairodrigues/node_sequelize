import Patners from '../repository/patners'

    async function getPatners(req,res){
        try{
            const patners =  await Patners.get()
            const response = await res.json({patners: patners})
            return response
        }catch(err){
            console.log(err)
        }
    }

module.exports = {
    getPatners
}