const Razorpay=require('razorpay')

exports.createOrder=(amount)=>{
    return new Promise((resolve,reject)=>{
    const rzpay=new Razorpay({
        key_id:process.env.RAZ_KEY,
        key_secret:process.env.REZ_SECRATE
    })
    
    rzpay.orders.create({amount,currency:'INR'},async(err,order)=>{
        if(order){
            resolve(order)
        }
        if(err) {
            reject(err)
        }
    })
})
}