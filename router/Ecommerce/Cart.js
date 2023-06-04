const {Router}=require('express')
const {authenticate}=require('../../authentication/authenticate')
const {addToCart, getAllCart,removeFromCart}=require('../../controller/Ecommerce/Cart')
const router=Router()

router.post('/addtocart',authenticate,addToCart)
router.get('/getallcart',authenticate,getAllCart)
router.post('/removecart',authenticate,removeFromCart)

module.exports=router