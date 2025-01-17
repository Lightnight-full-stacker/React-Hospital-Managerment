// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "clinic"
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Sample login endpoint
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
	console.log(req.body);
  // SQL query to check for user credentials
  const query = "SELECT * FROM authentication WHERE username = ? AND password = ?";
  

  connection.query(query, [username, password], (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
	console.log(results);
    
    if (results.length > 0) {
      return res.status(200).json({ message: "Login successful" });
	  
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  });
});

// Listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});