import UserService from './service.js';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
class UserController {

    static findUserByID = async (req, res) => {
        try {
            const Email = req.params.Email;
            const response = (await UserService.findUserByID(Email));
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
            const user = await UserService.findUserByID(data.Email);
            console.log(user);
            if(user.Item){
                return res.status(400).json({errors: [{msg: 'User already exists'}]});
            }else{
                // Bcrypt salthash
                const salt = await bcrypt.genSalt(10);
                data.Password = await bcrypt.hash(data.Password,salt); // Hashes the password

                const response = await UserService.createUser(data);
                if(response){
                    const payload = {
                        user: {
                            id: data.Email 
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
            const user = await UserService.findUserByID(data.Email);
            let isMatch = await bcrypt.compare(data.Password,user.Item.Password);

            if(!isMatch){
                return res.status(400).json({errors: [{msg: 'Invalid Credentials'}]});
            }

            const payload = {
                user: {
                    id: data.Email 
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