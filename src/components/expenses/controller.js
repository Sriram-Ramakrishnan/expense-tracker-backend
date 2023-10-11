const ExpenseService = require(`./service`);

class ExpenseController {

    static async create(req, res) {
        const data = await ExpenseService.createExpense(req.body)

        res.json(data)
    }

}

module.exports = ExpenseController;