const {Router}=require('express')
const {authenticate}=require('../../authentication/authenticate')
const {addProductMongo,getProduct}=require('../../controller/Ecommerce/Product')
const router=Router()

router.post('/addproduct',authenticate,addProductMongo)

router.get('/getproduct',authenticate,getProduct)
module.exports=router