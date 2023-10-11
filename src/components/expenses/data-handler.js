const db = require(`../../helpers/database`);

class DynamoController {
    static createExpense = async (data) => {
        const params = {
            TableName: 'Expenses',
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

module.exports = DynamoController;