const express = require('express');
const app = express();
const sequelize = require('./config');
const BudgetInput = require ('./model/BudgetInput')
const budgetexpense = require('./model/budgetexpense');
const DailyExpense = require('./model/dailyexpense')



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow specified methods
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
 
app.use(express.json());
 
// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


sequelize.sync()
.then(() => {
  console.log('Database synchronized');
})
.catch((err) => {
  console.error('Unable to sync database:', err);
});


app.post('/add-budgetinput', async(req,res)=>{
    const budgetinputs = req.body.budgetinputs;
    const createdBudgetInputs = await BudgetInput.bulkCreate(budgetinputs);
    res.status(201).json(createdBudgetInputs)

})

app.get('/budgetinputs',async(req,res)=>{
 const budgetinputs = await BudgetInput.findAll();
 res.json(budgetinputs);
 

});

app.delete('/budgetinputs/:id', async(req, res) => {
  const {id} = req.params;
  await BudgetInput.destroy({where: {id}});
  res.json({message: 'budgetinput deleted successfully'});
})

//budget expense
app.post('/add-budgetexpense', async(req,res)=>{
    const budgetexpenses = req.body.budgetexpenses;
    const createdBudgetExpenses = await budgetexpense.bulkCreate(budgetexpenses);
    res.status(201).json(createdBudgetExpenses)

})

app.get('/budgetexpenses',async(req,res)=>{
 const budgetexpenses = await budgetexpense.findAll();
 res.json(budgetexpenses);
 

});

app.delete('/budgetexpenses/:id', async(req, res) => {
  const {id} = req.params;
  await budgetexpense.destroy({where: {id}});
  res.json({message: 'budgetinput deleted successfully'});
})

//daily expenses

app.get('/dailyexpenses',async(req,res)=>{
  const dailyexpenses = await DailyExpense.findAll();
  res.json(dailyexpenses);
});


app.post('/add-dailyexpense', async(req,res)=>{
  const dailyexpenses = req.body.dailyexpenses;
  const createdDailyExpenses = await DailyExpense.bulkCreate(dailyexpenses);
  res.status(201).json(createdDailyExpenses)
})

app.delete('/dailyexpenses/:id', async(req, res) => {
  const {id} = req.params;
  await DailyExpense.destroy({where: {id}});
  res.json({message: 'budgetinput deleted successfully'});
})
