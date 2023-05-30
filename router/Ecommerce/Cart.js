const {Router}=require('express')
const {authenticateMogo}=require('../../authentication/authenticate')
const {addToCart, getAllCart,removeFromCart}=require('../../controller/Ecommerce/Cart')
const router=Router()

router.post('/addtocart',authenticateMogo,addToCart)
router.get('/getallcart',authenticateMogo,getAllCart)
router.post('/removecart',authenticateMogo,removeFromCart)
module.exports=router