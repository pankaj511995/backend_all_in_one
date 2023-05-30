const User=require('../../models/SQLuser');
const {S3BucketUpload}=require('../../service/s3bucket')
const {premium,error}=require('../../service/repete')
exports.leaderboardOfAll=async(req,res)=>{
    try{
        await premium(req.user.isPremium)
        const user=await User.findAll({
                 attributes:['id','name','totalExpense'],
                 order:[['totalExpense','DESC']]
                })
        res.status(200).json(user) 
    }catch(err){
        error(res,'join premium to enjoy this feature','error while printing leaderboard')
    }
}
exports.downloadAllExpenseLink= async(req,res)=>{
    try{
        await premium(req.user.isPremium)
        const exp=await req.user.getExpenses()
        const location=await S3BucketUpload(JSON.stringify(exp),req.user.email)
            await req.user.createDownload({location:location})
        const url=await req.user.getDownloads({attributes:['location','createdAt']})
        res.status(200).json({Location:url,link:location})
    }catch(err){
    error(res,'join premium to enjoy this feature','error while downloading all expense')
    }
}

