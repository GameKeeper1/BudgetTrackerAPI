const {DataTypes} = require('sequelize');
const sequelize = require('../config');

const DailyExpense = sequelize.define('dailyexpense',{
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    dexpense:{
        type:DataTypes.FLOAT,
        allowNull: false
    }
},
)

module.exports = DailyExpense;