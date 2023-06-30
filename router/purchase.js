const express=require('express')
const{createOrderId,updateOrderId,failOrderStatus}=require('../controller/purchase')
const {authenticate}=require('../authentication/authenticate')
const router=express.Router()

router.post('/',authenticate,createOrderId)
router.post('/',authenticate,updateOrderId)
router.post('/updateFailedOrder',authenticate,failOrderStatus)




module.exports=router 