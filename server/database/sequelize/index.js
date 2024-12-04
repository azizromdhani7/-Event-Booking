const mysql = require("mysql2");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig)
connection.connect((err)=>{
  err ? console.error(err) : console.log("conectit");
 })
///for movies
 const getAllmovies = function (callback) {
  connection.query("select * from movies",(error,result)=>{
   callback(error,result)
  })
};

const getonemovie = function (id, callback) {
  connection.query("SELECT * FROM movies WHERE idmovies = ?", [id], (error, result) => {
    callback(error, result)
  })
};


const addmovie = function (body , callback) {
  connection.query("insert into movies set ? ",[body] , (error,result)=>{
   callback(error,result)
  })
};

const deletmovie = function (id , callback) {
  connection.query("DELETE FROM movies WHERE idmovies=? ",[id] , (error,result)=>{
   callback(error,result)
  })
};

const updatemovie = function (body, id, callback) {
  connection.query("UPDATE movies SET ? WHERE idmovies = ?", [body, id], (error, result) => {
    callback(error, result);
  });
};

///for comments


const addcom = function (body , callback) {
  connection.query("insert into comments set ? ",[body] , (error,result)=>{
   callback(error,result)
  })
};


const updatecomment = function (body ,id , callback) {
  connection.query(`update comments set ? where id = ${id} `,[body] , (error,result)=>{
   callback(error,result)
  })
};


const deletcom = function (id , callback) {
  connection.query("DELETE FROM comments WHERE idcomments=? ",[id] , (error,result)=>{
   callback(error,result)
  })
};


///for the rates 


const addrate = function (body , callback) {
  connection.query("insert into rates set ? ",[body] , (error,result)=>{
   callback(error,result)
  })
};




module.exports = {
  updatemovie,
  addrate,
  deletcom,
  getAllmovies,
  updatecomment , 
  addcom,
  addmovie,
  deletmovie,
  getonemovie
};