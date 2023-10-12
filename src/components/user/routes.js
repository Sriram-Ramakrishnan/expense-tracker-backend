import express from 'express';
import UserController from './controller.js';
const UserRouter = express.Router();

UserRouter.get(`/api/v1/users/:UserID`, UserController.findByID);
UserRouter.post(`/api/v1/users`, UserController.create);

export default UserRouter;