const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
//Set up default mongoose connection

const employeeSchemas = new mongoose.Schema({
  account: { type: String, required: true },
  amount: { type: Number, required: true },
  // timestamp: { type: Date, default: Date.now }
});


const atm = new mongoose.model("adi", employeeSchemas);

module.exports = atm;


// const mongoose = require("mongoose");

// // Set up default mongoose connection
// // mongoose.connect("mongodb://localhost:27017/mydatabase", {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });

// // Get the default connection
// const db = mongoose.connection;

// // Bind connection to error event (to get notification of connection errors)
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

// // Once the connection is open, you can define and use your models
// db.once("open", function () {
//   // console.log("Connected to MongoDB");
// });

// // Define schema
// const employeeSchema = new mongoose.Schema({
//   account: { type: String, required: true },
//   amount: { type: String, required: true },
// });

// // Create model
// const ATM = mongoose.model("ATM", employeeSchema);

// module.exports = ATM;