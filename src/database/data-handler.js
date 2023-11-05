import User from '../database/models/Users.js';
import Expense from '../database/models/Expenses.js';

class MongoDBController {
    static findUserByID = async (email) => {
        try {
            console.log(email);
            const response = await User.findOne({email});
            return response; 
        } catch (error) {
            console.error("User not found");
            throw error;
        }
    };

    static createUser = async (data) => {
        try {
            const newUser = new User(data);
            console.log(newUser);
            const savedUser = await newUser.save();
            return savedUser;
        } catch (error) {
            console.error("User not created");
            throw error;
        }
    };

    static createExpense = async (data) => {
        try {
            const newExpense = new Expense(data);
            console.log(newExpense);
            const savedExpense = await newExpense.save();
            return savedExpense;
        } catch (error) {
            console.error("Server error");
            throw error;
        }
    };

    static deleteExpense = async (data) => {
        try {
            const response = await Expense.deleteOne({ExpenseID: data.ExpenseID});
            return response;
        } catch (error) {
            console.error("Server error");
            throw error;
        }   
    }

};

export default MongoDBController;