// const bcrypt = require("bcrypt");
// const db = require("./db");

// async function signup(name, email, password) {
//   try {
//     const connection = await db.getConnection();
//     const username = email.match(/^([^@]+)/)[1];
//     const hashedPassword = await bcrypt.hash(password, 10);
//     console.log(name, email, password);
//     await connection.query(
//       "INSERT INTO users (Name, UserName, email, password) VALUES (?, ?, ?, ?)",
//       [name, username, email, hashedPassword]
//     );
//     connection.release();
//     return { success: true };
//   } catch (error) {
//     console.error("Error:", error.message);
//     return { error: "Internal server error." };
//   }
// }

// async function login(email, password) {
//   try {
//     const connection = await db.getConnection();
//     const result = await connection.query(
//       "SELECT * FROM users WHERE Email = ?",
//       [email]
//     );
//     const user = result[0][0];
//     console.log(user);
//     connection.release();

//     if (!user) {
//       return { error: "Invalid credentials" };
//     }
//     const isPasswordValid = await bcrypt.compare(password, user.Password);//'Password' name should be same as database;

//     if (isPasswordValid) {
//       return { success: true, user };
//     } else {
//       return { error: "Invalid credentials." };
//     }
//   } catch (error) {
//     console.error("Error:", error.message);
//     return { error: "Internal server error." };
//   }
// }

// module.exports = { signup, login };

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("./db");

// Function to generate JWT token
function generateToken(user) {
  const token = jwt.sign(
    { id: user.UserID, email: user.Email, Name: user.Name, UserName : user.UserName },
    "rdxdayal35@",
    { expiresIn: "1h" }
  );
  return token;
}

async function signup(name, email, password) {
  try {
    const connection = await db.getConnection();
    const username = email.match(/^([^@]+)/)[1];
    const hashedPassword = await bcrypt.hash(password, 10);
    await connection.query(
      "INSERT INTO users (Name, UserName, Email, Password) VALUES (?, ?, ?, ?)",
      [name, username, email, hashedPassword]
    );
    connection.release();
    return { success: true };
  } catch (error) {
    console.error("Error:", error.message);
    return { error: "Internal server error." };
  }
}

async function login(email, password) {
  try {
    const connection = await db.getConnection();
    const result = await connection.query(
      "SELECT * FROM users WHERE Email = ?",
      [email]
    );
    const user = result[0][0];
    connection.release();

    if (!user) {
      return { error: "Invalid credentials" };
    }
    const isPasswordValid = await bcrypt.compare(password, user.Password);

    if (isPasswordValid) {
      const token = generateToken(user);
      return { success: true, token, user };
    } else {
      return { error: "Invalid credentials." };
    }
  } catch (error) {
    console.error("Error:", error.message);
    return { error: "Internal server error." };
  }
}

module.exports = { signup, login, generateToken };
