import DynamoController from './data-handler.js'
class ExpenseService {

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
        return await DynamoController.addItem(params);
    }

    static createTableExpense = async (data) => {
        const params = {
            TableName: "EspressoDrinks",
            // For more information about data types,
            // see https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes and
            // https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.LowLevelAPI.html#Programming.LowLevelAPI.DataTypeDescriptors
            AttributeDefinitions: [
              {
                AttributeName: "DrinkName",
                AttributeType: "S",
              },
            ],
            KeySchema: [
              {
                AttributeName: "DrinkName",
                KeyType: "HASH",
              },
            ],
            ProvisionedThroughput: {
              ReadCapacityUnits: 1,
              WriteCapacityUnits: 1,
            },
        };
        return await DynamoController.createTable(params);
    }

}

export default ExpenseService;
