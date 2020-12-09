//load mysql module to operate with Mysql database
var mysql = require("mysql");

//now we create a connection to the database by calling the createConnection() method and provide detailed information on MYSQL server
var connnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "firstdb",
});

//Third, call the connect() method on the connection object to connect to the MySQL database server:
connnection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  
  //CREATE table "firsttable"
  var sql =
    "CREATE TABLE IF NOT EXISTS firsttable (name VARCHAR(255), address VARCHAR(255))";
  connnection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

  //INSERT INTO table

  //var sql = "INSERT INTO firsttable (name, address) VALUES ('Company Inc', 'Highway 37')";
  //connnection.query(sql, function (err, result) {
  //if (err) throw err;
  //console.log("1 record inserted");
  //});

  var sql = "INSERT INTO firsttable (name, address) VALUES ?";
  var values = [
    ["John", "Highway 71"],
    ["Peter", "Lowstreet 4"],
    ["Amy", "Apple st 652"],
    ["Hannah", "Mountain 21"],
    ["Michael", "Valley 345"],
    ["Sandy", "Ocean blvd 2"],
    ["Betty", "Green Grass 1"],
    ["Richard", "Sky st 331"],
    ["Susan", "One way 98"],
    ["Vicky", "Yellow Garden 2"],
    ["Ben", "Park Lane 38"],
    ["William", "Central st 954"],
    ["Chuck", "Main Road 989"],
    ["Viola", "Sideway 1633"],
  ];
  connnection.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });

  //SELECT * FROM table
  connnection.query("SELECT * FROM firsttable", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  //DELETE FROM table
  var sql = "DELETE FROM firsttable WHERE address = 'Mountain 21'";
  connnection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });

  //UPDATE FROM table
  var sql = "UPDATE firsttable SET address = 'Canyon 123' WHERE address = 'Valley 345'";
  connnection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});
