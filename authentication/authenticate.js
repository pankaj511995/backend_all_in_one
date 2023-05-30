const User=require('../models/SQLuser')
const Muser=require('../models/MongoUser')
const {error,verify}=require('../service/repete')
exports.authenticate= async(req,res,next)=>{
    try{ 
       const token=await verify(req.headers.authorization,process.env.JWT_TOKEN)
     
       if(!token) throw new Error('')
           const user= await User.findByPk(token.SqlUser)
           if(user){
            req.user=user
            next()
           }else throw new Error('')
                          
    }catch(err){ 
        console.log(err.message)
        error(res,'user does not exist','error while authentication')
    }

}

exports.authenticateMogo= async(req,res,next)=>{
    try{ 
       const token=await verify(req.headers.authorization,process.env.JWT_TOKEN)

       if(!token) throw new Error('')
           const user= await Muser.findById(token.MongoUser)
           if(user){
            req.user=user
            next()
           }else throw new Error('')
                          
    }catch(err){ 
        console.log(err.message)
        error(res,'user does not exist','error while authentication')
    }

}
