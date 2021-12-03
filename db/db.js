const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hzh123456',
  port: '3306',
  database: 'express'
})

const DBconnect = {
  connect: connection.connect((err) => {
    if (err) {
      console.log("连接失败");
      console.log(err);
      throw (err)
    } else {
      console.log("database connect seccussful!");
    }
  })
}

module.exports = {
  DBconnect
}