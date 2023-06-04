const mongoose=require('mongoose')

const user=new mongoose.Schema({
    name:{
        type:String,
        reuire:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phone:String,
    password:String
    ,cart:Array
    
})
module.exports=mongoose.model('user',user)