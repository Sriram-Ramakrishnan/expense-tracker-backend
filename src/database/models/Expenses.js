
import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  expenseID: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },

});

const Expense =  mongoose.model('Expense', expenseSchema);

export default Expense;
