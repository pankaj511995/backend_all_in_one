const mongoose=require('mongoose')

const product=new mongoose.Schema({
    title:String,
    price:Number,
    imageUrl:String,
   
})
module.exports=mongoose.model('product',product)
