const  express = require('express');
const morgan = require('morgan');
const helmet  = require('helmet');
// const { json } = require('express');

const Port = process.env.Port||9000;

const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan());

app.get("/",(req,res)=>{
    console.log(req.body);
    res.json({
        message:"server is runnig"
    })
  
});
// we will import loginrouter here and use it

const Loginrouter = require('./routers/Loginrouter')
app.post("/backend",Loginrouter);

app.use("*",(req,res)=>[
    res.status(404).send("PAGE NOT FOUND")

])

app.listen(Port,()=>{
    console.log("port is running on 9000");
});
