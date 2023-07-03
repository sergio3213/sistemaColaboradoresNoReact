const express = require('express')
const bodyParser = require('body-parser')
const routerGet = require("./rotas/rotaGet.js");
const routerPost = require("./rotas/rotaPost.js");
const routerPut = require("./rotas/rotaPut.js")
const app = express();

app.use(bodyParser.json())
app.use((_req,res,next)=>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next()
})

 app.use(routerGet)
app.use(routerPost)
app.use(routerPut)
 
module.exports = app
