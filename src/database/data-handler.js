import { DynamoDBClient,CreateTableCommand,  } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, 
        PutCommand, 
        GetCommand, 
        DeleteCommand,QueryCommand,
        UpdateCommand} from "@aws-sdk/lib-dynamodb";

import { config } from 'dotenv';
config();
const client = new DynamoDBClient({
    region: process.env.region
});
const docClient = DynamoDBDocumentClient.from(client);

class DynamoController {
    static createTable = async (params) => {
        const command = new CreateTableCommand(params);
        const response = await client.send(command);
        console.log(response);
        return response;
    };

    // Create
    static createItem = async (params) => {
        const command = new PutCommand(params);
        const response = await docClient.send(command);
        console.log(response);
        return response;
    };

    // Read
    static findItem = async (params) => {
        const command = new GetCommand(params);
        const response = await docClient.send(command);
        return response;
    };

    // Update
    static updateItem = async (params) => {
        const command = new UpdateCommand(params);
        const response = await docClient.send(command);
        return response;
    };

    // Delete
    static deleteItem = async (params) => {
        const command = new DeleteCommand(params);
        const response = await docClient.send(command);
        return response;
    };

    // Query
    static queryTable = async (params) => {
        const command = new QueryCommand(params);
        const response = await docClient.send(command);
        return response;
    };
}

export default DynamoController;