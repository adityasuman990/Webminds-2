const mongoose = require("mongoose");

const bankAccountSchema = new mongoose.Schema({
  accountNumber: {
    type: String,
    required: true,
    unique: true, // Ensure uniqueness of account numbers
  },
  accountHolderName: {
    type: String,
    required: true,
  },
});

const BankAccount = mongoose.model("BankAccount", bankAccountSchema);

module.exports = BankAccount;
