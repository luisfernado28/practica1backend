var User = require('../Models/userModel').User;

var service = require('../Service/authService');

function login(req,res){
    User.findOne({usuario: req.body.user}, (err,user)=>{
            if(err) return res.status(500).send({mensaje: err});
            if(!user) return res.status(500).send({mensaje: "usuario no encontrado"});
            service.createToken
            res.status(200).send({token: service.createToken(user)});
        })
}

function obtenerUsuarios(req,res){
    User.find({}, (err,user)=>{
        if(err) return res.status(500).send({mensaje: err});
        res.status(200).send(user);
    })
}

function insert(req,res) {
    var user= new User({
        nombre: req.body.nombre,
        usuario: req.body.usuario,
        password: req.body.password,

     });
    user.save().then((us)=>{
        console.log(JSON.stringify(us));
        res.send(us)
    },(err)=>{
        console.log(JSON.stringify(err));
        res.send(err)
    })
};

function updateUsuario(req,res){
    User.findOne({usuario: req.body.usuario},(err,user)=>{
        user.nombre = req.body.nombre;
        user.pass = req.body.pass;
        user.save().then((us)=>{
            console.log(JSON.stringify(us))
            res.send(us)
        },(err)=>{
            console.log(JSON.stringify(err))
            res.send(err)
        });
    })

}



module.exports = {
    login,
    insert,
    obtenerUsuarios,
    updateUsuario
};