const db = require(`../../helpers/database`);

class DynamoController {
    constructor() {
        this.tableName = 'Expenses';
    }

    async create(data) {
        const params = {
            TableName: this.tableName,
            Item: {
                UserID: data.UserID,
                ExpenseID: data.ExpenseID,
                ExpenseName: data.ExpenseName,
                Cost: data.Cost
            },
        };

        await db.put(params).promise();
        return params.Item;
    }
}

module.exports = new DynamoController();