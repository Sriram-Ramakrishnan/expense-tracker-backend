import express from 'express'
import ExpenseController from './controller.js';
const ExpenseRouter = express.Router();

ExpenseRouter.post(`/add`, ExpenseController.addExpense);
ExpenseRouter.post(`/create`, ExpenseController.createTables);


export default ExpenseRouter;