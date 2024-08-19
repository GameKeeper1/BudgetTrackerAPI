const {DataTypes} = require('sequelize');
const sequelize = require('../config');

const BudgetInput = sequelize.define('budgetinput',{
    description:{
        type:DataTypes.STRING,
        allowNull:false
        
    },
    income:{
        type:DataTypes.FLOAT,
        allowNull: false
    },
 
},{
    timestamps: true,
    //tableName: 'budgetinput'
}
)

module.exports = BudgetInput;