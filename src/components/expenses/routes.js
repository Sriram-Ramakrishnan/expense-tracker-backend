import express from 'express'
import ExpenseController from './controller.js';
import auth from '../middleware/auth.js';
const ExpenseRouter = express.Router();

ExpenseRouter.post(`/add`, auth,ExpenseController.createExpense);
ExpenseRouter.post(`/delete`, auth, ExpenseController.deleteExpense);
ExpenseRouter.post(`/getAll`,auth, ExpenseController.getExpenses);



export default ExpenseRouter;