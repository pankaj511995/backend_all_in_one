const express=require('express')
const controller=require('../../controller/ExpenseTracker/Expense')
const {authenticate}=require('../../authentication/authenticate')

const{downloadAllExpenseLink,leaderboardOfAll}=require('../../controller/ExpenseTracker/premium')

const router=express.Router()

router.post('/addExpense',authenticate,controller.addExpenseAmount)
router.post('/deleteAmount/:id',authenticate,controller.deleteAmount)
router.get('/ediiAmount/:id',authenticate,controller.ediiAmount)
router.post('/pagination',authenticate ,controller.paginationofExpense)
router.get('/totalAmount',authenticate ,controller.getTotalAmount)

router.get('/leaderboard',authenticate,leaderboardOfAll)
router.get('/downloadexpense',authenticate,downloadAllExpenseLink)

module.exports=router 
