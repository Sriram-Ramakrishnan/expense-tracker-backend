import express from 'express'
import ExpenseController from './controller.js';
const ExpenseRouter = express.Router();

ExpenseRouter.post(`/add`, ExpenseController.createExpense);
ExpenseRouter.post(`/delete`, ExpenseController.deleteExpense);
ExpenseRouter.post(`/getAll`, ExpenseController.getExpenses);



export default ExpenseRouter;