const express =require('express')
require('dotenv').config()
const bodyparser=require('body-parser')
const cors=require('cors')
const  sequelize=require('./database/sequelize')
// const userdata=require('./Rourer/Expense_router/userRout')
// const allExpense=require('./Rourer/Expense_router/expenseRout')
// const allpremiumfeature=require('./Rourer/Expense_router/prem')
const app=express()
app.use(cors())  
app.use(bodyparser.json({extended :false}))


// app.use('/user',userdata) 
// app.use('/expense',allExpense)
// app.use('/premium',allpremiumfeature)



//table creation 
const Expense=require('./models/expense')
const Order=require('./models/orders')
const forgotPassword=require('./models/forgotPassword')
const Download=require('./models/downloads')
const User=require('./models/user')


User.hasMany(Expense)
Expense.belongsTo(User)
User.hasMany(Order)
Order.belongsTo(User)
User.hasMany(forgotPassword)
forgotPassword.belongsTo(User)
User.hasMany(Download)
Download.belongsTo(User)


sequelize.sync()
.then(e=>{
    console.log('connected')
    app.listen(process.env.PORT)
}
    )
.catch(e=>console.log('got error',e.message))
      