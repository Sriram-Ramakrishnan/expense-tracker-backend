import DynamoController from '../../database/data-handler.js'
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs'
class UserService {

    static findUserByID = async (UserID) => {
        const params = {
            TableName: 'Users',
            Key: {
                UserID,
            },
        };
        const response = await DynamoController.findItem(params);
        return response;
    };

    static createUser = async (data) => {
        // Bcrypt salthash
        const salt = await bcrypt.genSalt(10);
        data.Password = await bcrypt.hash(data.Password,salt); // Hashes the password
        const params = {
            TableName: 'Users',
            Item: {
                UserID: data.UserID,
                Username: data.Username,
                Password: data.Password
            },
        };

        const response = await DynamoController.createItem(params);
        return response;
    };

}

export default UserService;