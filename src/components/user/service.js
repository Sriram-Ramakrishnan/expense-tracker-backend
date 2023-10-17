import DynamoController from '../../database/data-handler.js'
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
        const params = {
            TableName: 'Users',
            Item: {
                UserID: data.UserID,
                Email: data.Email,
                Username: data.Username,
                Password: data.Password
            },
        };

        const response = await DynamoController.createItem(params);
        return response;
    };

}

export default UserService;