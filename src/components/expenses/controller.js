import ExpenseService from './service.js';

class ExpenseController {

    static addExpense = async (req, res) => {
        const data = await ExpenseService.createExpense(req.body)
        res.json(data)
    }

    static createTables = async (req, res) => {
        const data = await ExpenseService.createTableExpense(req.body)
        res.json(data)
    }
}

export default ExpenseController;