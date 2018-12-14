var mongoose= require('mongoose');
var Schema= mongoose.Schema;
mongoose.connect("mongodb://localhost/prac1");

var user_scheme =  new Schema({
    nombre: String,
    ci: String,
    pass: String,
    email: String,
    fecha: String,
    estado: Boolean
});

var User = mongoose.model("usuarios", user_scheme);

module.exports.User= User;


