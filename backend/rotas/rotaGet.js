import express from "express";
const routerGet = express.Router();
import controllerLogin from "../controllers/controllerLogin.js";
routerGet.get("/login", controllerLogin);


export default routerGet