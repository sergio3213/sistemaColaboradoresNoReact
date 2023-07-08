const express = require('express')
const bodyParser = require('body-parser')
const routerGet = require("./rotas/rotaGet.js");
const routerPost = require("./rotas/rotaPost.js");
const routerPut = require("./rotas/rotaPut.js")
const routerDelete = require("./rotas/rotaDelete.js")
const app = express();
const cors = require('cors');

app.use(bodyParser.json())
app.use((_req,res,next)=>{
  res.header('Access-Control-Allow-Origin', 'httsp://localhost');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next()
})

const corsOptions = {
  origin: (origin, callback) => {
    if (origin === 'http://127.0.0.1:3002' || origin === 'https://localhost:3002in') {
      callback(null, true);
    } else {
      callback(new Error('Acesso não permitido por CORS'));
    }
  }
};

app.use(cors(corsOptions))
 app.use(routerGet)
app.use(routerPost)
app.use(routerPut)
app.use(routerDelete)
 
module.exports = app
