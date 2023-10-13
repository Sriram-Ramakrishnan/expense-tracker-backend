import ExpenseService from './service.js';

class ExpenseController {
    // Add expense
    static createExpense = async (req, res) => {
        const response = await ExpenseService.createExpense(req.body)
        res.send(response);
    }

    // Add expense
    static deleteExpense = async (req, res) => {
        const response = await ExpenseService.deleteExpense(req.body)
        res.send(response);
    }

    // Add expense
    static getExpenses = async (req, res) => {
        const response = await ExpenseService.getExpenses(req.body)
        res.send(response);
    }
}

export default ExpenseController;