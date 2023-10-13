import DynamoController from '../../database/data-handler.js'
import { v4 as uuidv4 } from 'uuid';
class ExpenseService {

    static createExpense = async (data) => {
        const params = {
            TableName: 'Expenses',
            Item: {
                UserID: data.UserID,
                ExpenseID: uuidv4(),
                ExpenseName: data.ExpenseName,
                Cost: data.Cost
            },
        };
        return await DynamoController.createItem(params);
    }

    static deleteExpense = async (data) => {
      const params = {
          TableName: 'Expenses',
          Key: {
            ExpenseID: data.ExpenseID
          }
      };
      return await DynamoController.deleteItem(params);
  }

  static getExpenses = async (data) => {
    const params = {
        TableName: 'Expenses',
        KeyConditionExpression: "UserID = :userID",
        ExpressionAttributeValues: {
          ":userID": data.UserID,
      },
      ConsistentRead: true,
    };
    return await DynamoController.queryTable(params);
}

}

export default ExpenseService;
