import jwt from 'jsonwebtoken'
import { config } from 'dotenv';
config();

export default function (req, res, next) {
    // Get the token from header:
    const token = req.header('x-auth-token');

    // Check if no token:
    if(!token){
        return res.status(401).json({msg: 'No token, authorization denied'});
    }

    // Verify if token exists
    try{
        const decoded = jwt.verify(token, process.env.jwtToken);
        req.user = decoded.user;
        next();
    } catch (err){
        return res.status(401).json({msg: 'Invalid token, authorization denied'});
    }
}