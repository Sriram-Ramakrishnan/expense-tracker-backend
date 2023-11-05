import UserService from './service.js';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
class UserController {

    static findUserByID = async (req, res) => {
        try {
            const email = req.params.email;
            console.log(email);
            const response = (await UserService.findUserByID(email));
            if(response == undefined){
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
            console.log(data);
            const user = await UserService.findUserByID(data.email);
            console.log(user);
            if(user){
                return res.status(400).json({errors: [{msg: 'User already exists'}]});
            }else{
                // Bcrypt salthash
                const salt = await bcrypt.genSalt(10);
                data.password = await bcrypt.hash(data.password,salt); // Hashes the password

                const response = await UserService.createUser(data);
                if(response){
                    const payload = {
                        user: {
                            id: data.email 
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
        const email = data.email;
        try{
            // Verify if user and password are equal:
            const user = await UserService.findUserByID(email);
            console.log(user);
            let isMatch = await bcrypt.compare(data.password,user.password);

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