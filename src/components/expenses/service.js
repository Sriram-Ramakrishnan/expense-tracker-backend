const DynamoController = require(`./data-handler`);

class ExpenseService {

    static createExpense = async (data) => {
        return await DynamoController.createExpense(data);
    }

}

module.exports = ExpenseService;