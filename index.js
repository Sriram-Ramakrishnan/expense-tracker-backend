import express, { json } from 'express';
const app = express()
const port = 3000

// Import the env files
import 'dotenv'
import { config } from 'dotenv';
config();

import bodyParser from 'body-parser'
import UserRouter from './src/components/user/routes.js';
import ExpenseRouter from  './src/components/expenses/routes.js';
app.use(bodyParser.json())

app.use('/api/v1/users',UserRouter);
app.use('/api/v1/expense',ExpenseRouter);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
