import UserService from './service.js';
import jwt from 'jsonwebtoken'
class UserController {

    static findUserByID = async (req, res) => {
        try {
            const UserID = req.params.UserID;
            const response = (await UserService.findUserByID(UserID));
            if(response.Item == undefined){
                res.status(400).json({errors: [{msg: 'User not found'}]});
            }
            else{
                res.send(response);
            }
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server error');
        }

    }

    static createUser = async (req, res) => {
        try {
            const data = req.body;
            const user = await UserService.findUserByID(data.UserID);
            console.log(user);
            if(user.Item){
                return res.status(400).json({errors: [{msg: 'User already exists'}]});
            }else{
                const response = await UserService.createUser(req.body);
                if(response){
                    const payload = {
                        user: {
                            id: data.UserID 
                        }
                    }
        
                    jwt.sign(payload,
                        process.env.jwtToken, // Add your personal JWT Secret key in default.json
                        { expiresIn: 3600 }, // Change this to 3600 during production!! 
                        (err, token)=>{
                            if (err) throw err;
                            return res.json({ token: token });
                        }); 
                }
            }


        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server error');
        }
    }

    static loginUser = async (req,res) => {
        const data = req.body;
        try{
            // Verify if user and password are equal:
            const user = await (UserService.findUserByID(data.UserID)).Item;
            let isMatch = bcrypt.compare(data.Password,user.Password);

            if(!isMatch){
                return res.status(400).json({errors: [{msg: 'Invalid Credentials'}]});
            }

            const payload = {
                user: {
                    id: user.UserID 
                }
            }

            jwt.sign(payload,
                process.env.jwtToken, // Add your personal JWT Secret key in default.json
                { expiresIn: 3600 }, // Change this to 3600 during production!! 
                (err, token)=>{
                    if (err) throw err;
                    return res.json({ token: token });
                }); 
            
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server error');
        }
    }

}
export default UserController;