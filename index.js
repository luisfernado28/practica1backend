var express=  require('express');
var bodyParser= require('body-parser');
var config= require('./config');
var userRoute = require('./Routes/user-route');
var app = express();
let cors = require('cors');

const PORT= config.port || 3000;

app.use(cors({origin: '*'}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
  res.send({mensaje: "oa mundo"})
});
// /usuario/insert
app.use("/usuario", userRoute);
app.listen(PORT,()=>{
  console.log("Servidor inicializado"+ PORT)
})





