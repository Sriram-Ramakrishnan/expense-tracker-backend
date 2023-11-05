import MongoDBController from '../../database/data-handler.js'
class UserService {
    static findUserByID = async (email) => {
        const response = await MongoDBController.findUserByID(email);
        return response;
    };

    static createUser = async (data) => {
        const response = await MongoDBController.createUser(data);
        return response;
    };

}

export default UserService;