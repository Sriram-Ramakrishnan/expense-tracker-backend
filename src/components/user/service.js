import UserRepository from './data-handler.js'

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

export default UserService;