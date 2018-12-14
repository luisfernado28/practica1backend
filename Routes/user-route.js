var express = require('express');

var userCtrl= require('../Controllers/userController');
var api = express.Router();

api.post("/insert", userCtrl.insert);
api.post("/login", userCtrl.login);
api.get("/getus",userCtrl.obtenerUsuarios);
api.post("/update", userCtrl.updateUsuario);


module.exports = api;



