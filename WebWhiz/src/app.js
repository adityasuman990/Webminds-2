// date:1/02/2024; Aditya Suman; backend in nodejs; Database in mongodb; Login database ecncrypted;
// if unclear mail @ adityasuman990@gmail dot com; HBS templateEngine used;  

const express = require("express");
const path = require("path");
const port = process.env.PORT || 3005; ///makes sure you get a proper host
require("./db/conn");
const hbs = require("hbs");
const Register = require("./models/registers");
const Atm = require("./models/transfer");
const Account = require("./models/addbank");
const Feed = require("./models/feed");
const app = express();
const static_path = path.join(__dirname, "../public");
const views_path = path.join(__dirname, "../template/views");
const partials_path = path.join(__dirname, "../template/partials");
// console.log(partials_path);
const bcrypt = require("bcryptjs");
const router = express.Router();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// console.log(path.join(__dirname, "../public"));
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", views_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/transfer", (req, res) => {
  res.render("transfer1");
});
app.get("/bank", (req, res) => {
  res.render("addbank");
});
app.get("/feed", (req, res) => {
  res.render("feed");
});
app.get("/contact", (req, res) => {
  res.render("contact1");
});
app.get("/terms", (req, res) => {
  res.render("terms");
});
app.get("/success", (req, res) => {
  res.render("success1");
});
app.get("/statementview", (req, res) => {
  res.render("statementview");
});
app.get("/updatepass", (req, res) => {
  res.render("updatepass");
});
app.get("/recieve", (req, res) => {
  res.render("recieve");
});

app.post("/", async (req, res) => {
  try {
    // console.log(req.body.email1);
    // res.send(req.body.email1);
    const registerUser = new Register({
      email: req.body.email,
      password: req.body.password,
    });

    const registered = await registerUser.save();

    res.status(201).render("login");
  } catch (e) {
    res.status(400).send(e);
    console.log(e);
  }
});

app.post("/feed", async (req, res) => {
  try {
    // console.log(req.body.email1);
    // res.send(req.body.email1);
    const registerUser3 = new Feed({
      feed: req.body.feedback,
      // password: req.body.password,
    });

    const registered3 = await registerUser3.save();

    res.status(201).render("feed");
  } catch (e) {
    res.status(400).send(e);
    console.log(e);
  }
});

app.post("/bank", async (req, res) => {
  try {
    // console.log(req.body.email1);
    // res.send(req.body.email1);
    const registerUser2 = new Account({
      accountNumber: req.body.accountNumber,
      accountHolderName: req.body.accountHolderName,
    });

    const registered2 = await registerUser2.save();

    res.status(201).render("success1");
  } catch (e) {
    res.status(400).send(e);
    console.log(e);
  }
});

app.post("/atm", async (req, res) => {
  try {
    // console.log(req.body.email1);
    // res.send(req.body.email1);
    const registerUsers = new Atm({
      amount: req.body.amount,

      account: req.body.account,
    });
    // console.log(amount);
    const registered1 = await registerUsers.save();

    res.status(201).render("paysuc");
  } catch (e) {
    res.status(400).send(e);
    console.log(e);
  }
});

// router.post("/atm", async (req, res) => {
//   try {
//     // Create a new document based on the request body
//     const registerUsers = new Atm({
//       account: req.body.account,
//       amount: req.body.amount,
//     });

//     // Save the document to the database
//     const registeredUser = await registerUsers.save();

//     // Respond with a success status and render a login page (adjust as needed)
//     res.status(201).render("login");
//   } catch (e) {
//     // If an error occurs, respond with a 400 status and send the error message
//     res.status(400).send(e.message);
//     console.error(e);
//   }
// });

// module.exports = router;

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const useremail = await Register.findOne({ email: email });
    const isMatch = await bcrypt.compare(password, useremail.password);
    // console.log(useremail);
    if (isMatch) {
      res.status(201).render("index");
    } else {
      res.send("error");
    }
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});

// const bcrypt = require("bcryptjs");
// const securePasssword=  async(password)=>{
//   const passwordHash= await bcrypt.hash(password,10);
//   // console.log(passwordHash);
//   const passwordMatch = await bcrypt.compare(password,passwordHash);
//   console.log(passwordMatch);
// }

// securePasssword("aditya");

app.listen(port, () => {
  console.log(`server started on local host ${port}`);
});
