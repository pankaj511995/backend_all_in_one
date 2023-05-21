const express=require('express')
const{createOrderId,updateOrderId,failOrderStatus}=require('../controller/purchase')
const {authenticate}=require('../authentication/authenticate')
const router=express.Router()

router.get('/createOrder',authenticate,createOrderId)
router.post('/updateOrder',authenticate,updateOrderId)
router.post('/updateFailedOrder',authenticate,failOrderStatus)




module.exports=router 