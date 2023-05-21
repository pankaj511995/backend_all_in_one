const express=require('express')
const {signupUser,signinUser}=require('../controller/sign_IN_UP')
const forgotpassword=require('../controller/forgotPasswors')

const router=express.Router()

router.post('/signup',signupUser)
router.post('/signin',signinUser)
router.post('/forgotPassword',forgotpassword.forgotPasswordLink)
router.get('/passwordlink/:id',forgotpassword.sendPasswordLink)
router.get('/updatepassword/:id',forgotpassword.updatePassword)

module.exports=router 