const express =require('express')
require('dotenv').config()
const bodyparser=require('body-parser')
const cors=require('cors')
const mongoose=require('mongoose')
const userdata=require('./router/user')
const purchase=require('./router/purchase')
const app=express()
app.use(cors())  
app.use(bodyparser.json({extended :false}))

 
app.use('/user',userdata) 

app.use('/purchase',purchase)


mongoose.connect(process.env.MONGODB_URL)
.then((res)=>{
    console.log('connected')
    app.listen(process.env.PORT)
}) 
.catch(e=>console.log('got error',e.message))
        