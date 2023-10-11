const UserService = require(`./user.service`);

class UserController {

    async findByID(req, res) {
        const data = await UserService.findByID(req.params.UserID)

        res.json(data)
    }

    async create(req, res) {
        const data = await UserService.create(req.body)

        res.json(data)
    }

}

module.exports = new UserController()