const express = require('express');
const ExpenseController = require('./controller');
const router = express.Router();

router.post(`/add`, ExpenseController.create);

module.exports = router;