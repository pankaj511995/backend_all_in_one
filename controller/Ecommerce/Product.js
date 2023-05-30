
const Product=require('../../models/Ecommerce/Product')

exports.addProductMongo=async(req,res)=>{
    try{
        const{title,price,imageUrl}=req.body
        const product=await Product.create({title:title,price:price,imageUrl:imageUrl})
        res.status(200).json({message:'added'})
    }catch(err){
        console.log(err)
    }
}
exports.getProduct=async(req,res)=>{
    try{
        console.log('i am user')
const product=await Product.find()
res.status(200).json({data:product})
    }catch{
        console.log('error while gating all product')
        res.status(400).json({message:'something went wrong'})
    }
}