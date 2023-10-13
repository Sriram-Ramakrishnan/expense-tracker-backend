import UserService from './service.js';
class UserController {

    static findUserByID = async (req, res) => {
        const UserID = req.params.UserID;
        const response = await UserService.findUserByID(UserID);
        res.send(response);
    }

    static createUser = async (req, res) => {
        const response = await UserService.createUser(req.body)
        res.send(response);
    }

}
export default UserController;