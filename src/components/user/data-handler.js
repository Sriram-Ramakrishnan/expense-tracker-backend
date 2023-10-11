const db = require(`../../helpers/database`);
const {v4: uuidv4} = require('uuid');

class UserRepository {
    static findByID = async (UserID) => {
        const params = {
            TableName: 'Users',
            Key: {
                UserID,
            },
        };

        return await db.get(params).promise();
    }

    static create = async (data) => {
        const params = {
            TableName: 'Users',
            Item: {
                UserID: uuidv4(),
                Username: data.Username,
            },
        };

        await db.put(params).promise();

        return params.Item;
    }
}

module.exports = UserRepository;