import UserService from './service.js';

class UserController {

    static findByID = async (req, res) => {
        const data = await UserService.findByID(req.params.UserID)
        res.json(data)
    }

    static create = async (req, res) => {
        const data = await UserService.create(req.body)
        res.json(data)
    }

}
export default UserController;