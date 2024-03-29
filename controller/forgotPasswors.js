const uuid=require('uuid')

const forgotPassword=require('../models/forgotPassword')
const {sendEmail}=require('../service/email')
const {error,bcryptpassword,ValidatePassword}=require('../service/repete')

exports.forgotPasswordLink=async(req,res)=>{
    // const t = await sequelize.transaction();
    try{
    //     const uid=uuid.v4()   
    // const user=await User.findOne({where:{email:req.body.email}})
    // if(user){
    //         const p1=sendEmail(req.body.email,uid)
    //        const p2= user.createForgot({id:uid,isActive:true},{transaction:t})
    //        await Promise.all([p1,p2])//if may be email fail to send then rollback
    //        await t.commit()
        res.status(200).json({message:'sent email'})
    // }else throw new Error()
}catch(err){
    // await t.rollback()
    error(res,'something went wrong','error while sending forgot email link')
} 
}
exports.sendPasswordLink=async(req,res)=>{
    const f=await forgotPassword.findOne({where:{id:req.params.id}})
            if(f.isActive){
                await forgotPassword.update({isActive:false},{where:{id:req.params.id}})
                    res.status(200).send(`
                    <form action="/user/updatepassword/${req.params.id}" method="get">
                        <label for="password">Enter your New password:-</label><br>
                        <input  name="password" type="password"><br>
                        <button>Reset password</button>
                </form>
                
                    `)
                }else{
                    res.send('<strong>Sorry link can open once only</strong>')
                }
}
 
exports.updatePassword=async(req,res)=>{
    try{
            const f=await forgotPassword.findOne({where:{id:req.params.id}})
             const hash=await  bcryptpassword(req.query.password)
              await User.update({password:hash},{where:{id:f.UserId}})
               res.status(200).send(`<h1>password has been changed</h1>`)
    }catch(err){
        error(res,'something went wrong','error while updating reset password')
    }
} 
exports.updateNeqPassword=async(req,res)=>{
    try{
        const {password}=req.body
        console.log(req.body)
        if(!ValidatePassword(password)){
            return res.status(400).json({message:'enter correct password '})
        }
         const hash=await  bcryptpassword(password)
      await req.user.update({password:hash})
               res.status(200).send({message:'password has been changed '})
    }catch(err){
        error(res,'something went wrong','error while updating reset password')
    }
}