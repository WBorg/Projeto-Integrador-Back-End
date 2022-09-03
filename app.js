const express = require('express');
const app = express();
require('dotenv').config()
var cors = require('cors')

const Users = require('./models/User');
const Produtos = require('./models/Products');


const router = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers","Content-Type, Authorization");
  app.use(cors());
  next();
})

app.get("/", function(request,response){
  response.send("Serviço API Rest iniciada...");
  console.log(response)
})

app.use(router);



app.listen(4500, ()=>{
  console.log(`Servidor iniciado na porta 4500 http://localhost:4500`);
});




