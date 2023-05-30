const {Router}=require('express')
const {authenticateMogo}=require('../../authentication/authenticate')
const {addProductMongo,getProduct}=require('../../controller/Ecommerce/Product')
const router=Router()

router.post('/addproduct',authenticateMogo,addProductMongo)

router.get('/getproduct',authenticateMogo,getProduct)
module.exports=router