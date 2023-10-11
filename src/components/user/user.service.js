const UserRepository = require(`./user.repository`);

class UserService {

    async findByID(UserID) {
        const data = await UserRepository.findByID(UserID);

        if (data) {
            return data.Item;
        }

        return data;
    }

    async create(data) {
        return await UserRepository.create({
            Username: data.Username
        });
    }

}

module.exports = new UserService()