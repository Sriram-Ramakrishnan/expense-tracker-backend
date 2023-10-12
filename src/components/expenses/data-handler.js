import { DynamoDBClient,CreateTableCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({
    region: process.env.region,
});
class DynamoController {
    static createTable = async (params) => {
        const command = new CreateTableCommand(params);
        const response = await client.send(command);
        console.log(response);
        return response;
    };

    static addItem = async (params) => {
        await db.put(params).promise();
        return params.Item;
    }
}

export default DynamoController;