const User=require('../models/user')
const {error,verify}=require('../service/repete')
exports.authenticate= async(req,res,next)=>{
    try{
       const token=await verify(req.headers.authorization,process.env.JWT_TOKEN)
       if(!token) throw new Error('')
       console.log(token)
           const user= await User.findByPk(token.id)
           if(user){
            req.user=user
            next()
           }else throw new Error('')
                          
    }catch(err){ 
        console.log(err.message)
        error(res,'user does not exist','error while authentication')
    }

}
