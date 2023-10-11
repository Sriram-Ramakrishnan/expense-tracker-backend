const DynamoController = require(`./data-handler`);

class ExpenseService {

    async create(data) {
        return await DynamoController.create(data);
    }

}

module.exports = new ExpenseService()