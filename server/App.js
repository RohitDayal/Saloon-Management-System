// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const { signup, login } = require("./Auth");
// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

// app.post("/signup", async (req, res) => {
//     const  name = req.body.name; // name, mail,password as varible should be same as client side
//     const email = req.body.mail;
//     const password  = req.body.password;
//   if (!name || !email || !password) {
//     return res
//       .status(400)
//       .json({ error: "All required fields must be provided." });
//   }

//   const result = await signup(name, email, password);

//   if (result.success) {
//     console.log("Signup successful!");
//     res.status(200).json({ message: "Signup successful!" });
//   } else {
//     res.status(500).json({ error: result.error });
//   }
// });

// app.post("/login", async (req, res) => {

//   const email = req.body.mail;
//   const password = req.body.password;

//   console.log(email, password);
//   if (!email || !password) {
//     return res
//       .status(400)
//       .json({ error: "Username and password are required." });
//   }

//   const result = await login(email, password);

//   if (result.success) {
//     console.log("Login successful!");
//     res.status(200).json({ message: "Login successful", user: result.user });
//   } else {
//     res.status(401).json({ error: result.error });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server listening at localhost:${port}`);
// });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const addSaloonRoute = require("./routes/addSaloon");
const usersRoute = require("./routes/users");
const createSaloon = require("./routes/createSaloon");
const dataServices = require("./routes/dataServices");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/salon", dataServices);
app.use("/api", dataServices);
app.use("/create-saloon", createSaloon);
app.use("/users", usersRoute);

// app.use((req, res, next) => {
//   console.log(`${req.method} request for ${req.url}`);
//   next();
// });
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}`);
});
