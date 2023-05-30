const Sequelize=require('sequelize')
const sequelize=require('../../database/sequelize')
module.exports=sequelize.define('Download',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    location:Sequelize.STRING

})