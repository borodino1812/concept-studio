const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: `${process.env.DB_PASSWORD}`,
  database: "react-crm",
});

connection.connect();

connection.query("SELECT * FROM posts", (err, rows, fields) => {
  if (err) throw err;

  console.log("Post list is: " + JSON.stringify(rows));
});

module.exports = connection;
