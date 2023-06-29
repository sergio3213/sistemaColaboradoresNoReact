import express from 'express'
import bodyParser from 'body-parser'
import routerGet from "./rotas/rotaGet.js";
import routerPost from "./rotas/rotaPost.js";

const app = express();

app.use(bodyParser.json())
app.use((_req,res,next)=>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next()
})

 app.use(routerGet)
app.use(routerPost)
 
export default app
