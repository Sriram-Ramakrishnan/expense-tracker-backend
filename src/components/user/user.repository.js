const db = require(`../../helpers/database`);
const {v4: uuidv4} = require('uuid');

class UserRepository {
    constructor() {
        this.tableName = 'Users';
    }

    async findByID(UserID) {
        const params = {
            TableName: this.tableName,
            Key: {
                UserID,
            },
        };

        return await db.get(params).promise();
    }

    async create(data) {
        const params = {
            TableName: this.tableName,
            Item: {
                UserID: uuidv4(),
                Username: data.Username,
            },
        };

        await db.put(params).promise();

        return params.Item;
    }
}

module.exports = new UserRepository();