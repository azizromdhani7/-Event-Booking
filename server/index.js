const express = require("express");
const cors = require("cors");
const PORT = 8080;
const app = express();
const db = require("./database/sequelize/index")
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});


//for movies

app.get("/api/movies", (req, res) => {
  db.getAllmovies((err,result)=>{
   err ? res.send(err) : res.send(result)
  })
});


app.get("/api/movies/:id", (req, res) => {
  db.getonemovie(req.params.id,(err,result)=>{
   err ? res.send(err) : res.send(result)
  })
});

 app.post("/api/movies", (req, res) => {
  db.addmovie(req.body , (err,result)=>{
   err ? res.send(err) : res.send(result)
  })
 });

 app.delete("/api/movies/:id",(req,res)=>{
  db.deletmovie(req.params.id,(err,result)=>{
    err? res.send(err) :res.send(result) 
  })
 })

 app.put("/api/movies/:id", (req, res) => {
  db.updatemovie(req.body, req.params.id, (err, result) => {
    err ? res.send(err) : res.send(result);
  });
 });

///for comments

 app.post("/api/movies/comments", (req, res) => {
  db.addcom(req.body , (err,result)=>{
   err ? res.send(err) : res.send(result)
  })
 });

 app.delete("/api/movies/comments/:id",(req,res)=>{
  db.deletcom(req.params.id,(err,result)=>{
    err? res.send(err) :res.send(result) 
  })
 })

 app.put("/api/movies/comments",(req,res)=>{
  db.updatecomment(req.body,req.params.id,(err,result)=>{
    err? res.send(err) :res.send(result)
 })
})


/// for rates 

app.post("/api/movies/rates", (req, res) => {
  db.addcom(req.body , (err,result)=>{
   err ? res.send(err) : res.send(result)
  })
 });




app.listen(PORT, () => {
 console.log(`listening on port ${PORT}`);
});
