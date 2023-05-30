
const User=require('../models/SQLuser')
const serviceRepet=require('../service/repete')
const {ValidateName,error,compair,ValidateEmail,bcryptpassword,
    ValidatePassword,generateToken,ValidatePhone}=require('../service/repete')
const MUser=require('../models/MongoUser')
exports.signupUser=async(req,res)=>{
     try{
         const {name,email,password,phone}=req.body
         if(!ValidateName(name) || !ValidateEmail(email)||!ValidatePassword(password) || !ValidatePhone(phone)){
            return res.status(400).json({message:'please fill correctly'})
         }
         const hash=await bcryptpassword(password)
        const p1= User.create({name:name,email:email,password:hash,phone:phone.toString()})
        const p2=MUser.create({name:name,email:email})
        await Promise.all([p1,p2])
         res.status(200).json({status:true})

    }catch(err){ 
        console.log(err.message,'888888888888888888888888888888')
        error(res,'email already exist','error while signup')
    }
}
exports.signinUser=async(req,res)=>{
    try{
    const {email,password}=req.body
    if(!ValidateEmail(email)||!ValidatePassword(password)){
        return res.status(400).json({message:'please fill correctly'})
     }
        const SQLuser=await  User.findOne({where:{email:email}})
       await compair(res,password,SQLuser.password)
       
        const mongouser=await MUser.findOne({email:email})

        res.status(200).json({token:generateToken(SQLuser.id,mongouser._id,true,false)})

}catch(e){
    
    error(res,'email does not exit','error while sign in')
} 
}

