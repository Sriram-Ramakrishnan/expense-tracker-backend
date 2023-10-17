import express from 'express';
import UserController from './controller.js';
const UserRouter = express.Router();

UserRouter.get(`/find/:UserID`, UserController.findUserByID);
UserRouter.post(`/create`, UserController.createUser);
UserRouter.post(`/login`, UserController.loginUser);



export default UserRouter;