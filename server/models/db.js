const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Mysql@123root10%",
  database: "salloon",
  waitForConnections: true,
  connectionLimit: 120,
  
});

const getConnection = async () => {
  try {
    const connection = await pool.getConnection();
    // console.log("DB Connected");
    return connection;
  } catch (error) {
    console.error("DB Connection Error:", error.message);
    throw error;
  }
};

module.exports = { getConnection };
