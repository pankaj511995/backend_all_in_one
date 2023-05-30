const Sequelize=require('sequelize')
const sequelize=require('../database/sequelize')
module.exports=sequelize.define('User',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type:Sequelize.STRING,
        unique:false,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false
    }, 
    phone:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    isPremium:{
        type:Sequelize.BOOLEAN,
        defaultValue:false
    },
    totalExpense:{
    type:Sequelize.INTEGER,
    defaultValue:0
    }

})