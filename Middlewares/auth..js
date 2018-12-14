const services= require('../Service/authService');
function isAuth(req, res, next){
    if(!req.headers.token){
        return res.status(403).send({mensaje:"no tienes acceso"});
    }
    const token= req.headers.token.split('  ')[0];

    services.decodeToken(token).then(respose=>{
        req.token = respose
        next()
    }).catch(response =>{
        res.status(response.status)
    })
}
module.exports = isAuth
