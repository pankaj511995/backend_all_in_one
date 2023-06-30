const jwt=require('jsonwebtoken')

const bcrypt=require('bcrypt')
exports.ValidateName=(str)=>{
    for(let i=0;i<str.length;i++){
      if(!/[a-zA-Z]/.test(str[i])){
        return false
      }   
    }
    return true
  }
  exports.ValidateEmail=(str)=>{
    for(let i=0;i<str.length;i++){
      if(/['@','.' ]/.test(str[i])){
        continue
      }
      if(!/[a-zA-Z0-9]/.test(str[i])){
        return false
      }
      
    }
    return true
  }
  exports.ValidatePassword=(str)=>{
    for(let i=0;i<str.length;i++){
      if(/['@' ]/.test(str[i])){
        continue
      }
      if(!/[a-zA-Z1-9]/.test(str[i])){
        return false
      }
      
    }
    return true
  }
  exports.ValidatePhone=(str)=>{
    if(str.length!==10)return false
    for(let i=0;i<str.length;i++){
      if(!/[0-9]/.test(str[i])){
        return false
      }   
    }
    return true
  }
 exports.error=(res,message,consoleError)=>{
    res.status(400).json({message:message})
        console.log(consoleError)   
 }


exports.generateToken=(_id,user,isPreamium)=>{
    return jwt.sign({MongoUser:_id,userLogin:user,isPreamium:isPreamium},process.env.JWT_TOKEN)
}



exports.verify=(token,secrate)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,secrate,(err,token)=>{
            if(token){
               
               resolve(token)
            }else{
                reject(err)
            }
        })
    })
}

exports.bcryptpassword=(password)=>{
    return new Promise((resolve,reject)=>{
        bcrypt.hash(password,Number(process.env.SALT),async(err,hash)=>{
            if(hash){
                resolve(hash)
            }
           if(err){
            reject(err)
           }
        })       
    })
}

exports.compair=(res,p1,p2)=>{
    return new Promise((resolve,reject)=>{
        bcrypt.compare(p1,p2,((err,result)=>{
            if(result)  {
              resolve(result)
            }else{
                return res.status(400).json({message:"incorrect password"}) 
              
            }
        }))
    })
} 


