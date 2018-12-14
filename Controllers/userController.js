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

function obtenerUnUsuario(req, res) {
    User.findOne({"nombre": req.query.nombre}, (err,user)=>{
        if(err) return res.status(500).send({mensaje: err});
        if(!user) return res.status(500).send({mensaje: "usuario no encontrado"});
        res.status(200).send(user);
    })
}

function deleteUser(req, res) {
    User.findOne({"nombre" : req.query.nombre}, (err,user) =>{
        if(err) return res.status(500).send({mensaje: err});
        user.estado = false;
        user.save();
        res.status(200).send({message :"user deleted"});
    })
}

function insert(req,res) {
    var user= new User({
        nombre: req.body.nombre,
        ci: req.body.ci,
        pass: req.body.pass,
        email: req.body.email,
        fecha: req.body.fecha,
        estado: req.body.estado,
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
    User.findOne({"nombre": req.query.nombre},(err,user)=>{
        user.ci = req.body.ci;
        user.pass = req.body.pass;
        user.email = req.body.email;
        user.fecha = req.body.estado;

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
    updateUsuario,
    deleteUser,
    obtenerUnUsuario
};