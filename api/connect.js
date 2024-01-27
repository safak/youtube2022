import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"voicesocialuser",
  password:"SecurePassword124",
  database:"voicesocialdb"
})