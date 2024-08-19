const {DataTypes} = require('sequelize');
const sequelize = require('../config');

const budgetexpense = sequelize.define('budgetexpense',{
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    expense:{
        type:DataTypes.FLOAT,
        allowNull: false
    }
},
)

module.exports = budgetexpense;