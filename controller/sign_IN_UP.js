


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
        await MUser.create({name:name,email:email,password:hash,phone:phone.toString()})
         
         res.status(200).json({status:true})

    }catch(err){ 
        error(res,'email already exist','error while signup')
    }
}
exports.signinUser=async(req,res)=>{
    try{
    const {email,password}=req.body
    const admin=req.body.admin
    if(!ValidateEmail(email)||!ValidatePassword(password)){
        return res.status(400).json({message:'please fill correctly'})
     }
        const user=await  MUser.findOne({email:email})
        console.log(user)
       await compair(res,password,user.password)
       if(req.body.admin===true){
       return  res.status(200).json({token:generateToken(user._id,false,user.isPreamium)})
       }
        res.status(200).json({token:generateToken(user._id,true,user.isPreamium)})

}catch(e){
    
    error(res,'email does not exit','error while sign in')
} 
}

