const UserRepository = require(`./data-handler`);

class UserService {

    static findByID = async (UserID) => {
        const data = await UserRepository.findByID(UserID);

        if (data) {
            return data.Item;
        }

        return data;
    }

    static create = async (data) => {
        return await UserRepository.create({
            Username: data.Username
        });
    }

}

module.exports = UserService;