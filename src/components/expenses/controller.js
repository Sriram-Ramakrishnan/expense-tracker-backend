const ExpenseService = require(`./services`);

class ExpenseController {

    async create(req, res) {
        const data = await ExpenseService.create(req.body)

        res.json(data)
    }

}

module.exports = new ExpenseController()