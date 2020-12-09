//load mysql module to operate with Mysql database
var mysql = require('mysql');

//now we create a connection to the database by calling the createConnection() method and provide detailed information on MYSQL server
var connnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});


//Third, call the connect() method on the connection object to connect to the MySQL database server:
connnection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

