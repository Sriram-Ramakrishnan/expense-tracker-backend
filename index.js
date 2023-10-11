const express = require('express')
const app = express()
const port = 3000

// Import the env files
require(`dotenv`).config();

const bodyParser = require('body-parser')
const UserRouter = require(`./src/components/user/routes`);
const ExpenseRouter = require(`./src/components/expenses/routes`);
app.use(bodyParser.json())

app.use('/',UserRouter);
app.use('/expenses',ExpenseRouter);


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
