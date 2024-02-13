import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"voicesocialuser",
  password:"SecurePassword124",
  database:"voicesocialdb"
});

//logging connection test

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL server');
});

db.end();

