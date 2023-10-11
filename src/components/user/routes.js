const express = require('express');
const UserController = require('./controller');
const router = express.Router();

router.get(`/api/v1/users/:UserID`, UserController.findByID);
router.post(`/api/v1/users`, UserController.create);

module.exports = router;