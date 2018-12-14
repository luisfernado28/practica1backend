var express = require('express');

var userCtrl= require('../Controllers/userController');
var api = express.Router();

api.post("/insert", userCtrl.insert);
api.delete("/delete", userCtrl.deleteUser);
api.post("/login", userCtrl.login);
api.get("/getus",userCtrl.obtenerUsuarios);
api.get("/getOneus",userCtrl.obtenerUnUsuario);
api.post("/update", userCtrl.updateUsuario);


module.exports = api;



