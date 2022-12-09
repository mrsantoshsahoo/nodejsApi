// const bodyParser = require("body-parser");
// const user_route=express();
const express = require('express');
const router = express.Router();

// user_route.use(bodyParser.json());
// user_route.use(bodyParser.urlencoded({extended:true}));
// user_route.use(express.static("public"));

const path=require("path");
const user_controler=require("../controler/user_controler");
router.post(  '/register' ,user_controler.register_user);
router.get(  '/register' ,user_controler.get_user);
module.exports= router;