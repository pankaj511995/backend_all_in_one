const Muser=require('../../models/MongoUser')
const Product=require('../../models/Ecommerce/Product')
exports.addToCart=async(req,res)=>{
    try{
       
        const {productId,quantity}=req.body
         const product=await Product.findById(productId)       
        req.user.cart.push({...product._doc,quantity:quantity})
        await req.user.save()
       
        res.status(200).json({message:'added'})
    }catch(err){
        res.status(400).json({message:'error'})
        console.log(err)
    }
}
exports.getAllCart=async(req,res)=>{
    try{
        res.status(200).json({data:req.user.cart})
    }catch(err){
        console.log(err)
    }
}
exports.removeFromCart=async(req,res)=>{
    try{
        const {_id}=req.body

        req.user.cart=req.user.cart.filter(item=>item._id.toString()!==_id.toString())
            await req.user.save()
            res.status(200).json({message:'true'})
    }catch(err){
        req.status(400).json({message:'some thing went wrong '})
        console.log(err.message)
    }
}