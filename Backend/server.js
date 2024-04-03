const express=require("express")
require("dotenv").config({path:"./.env"})
const debug=require("debug")("server$")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")

const port = process.env.PORT_SERVER;
const host = process.env.LOCALHOST;


app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/todo/folder", require("./routes/folderRoutes"));
app.use("/todo/task", require("./routes/taskRoutes"));

app.post("/hello",(req,res,next)=>{
  debug("hello world")
  res.send({message:"hello how are you"})
})

app.listen(port, host, () => {
    debug(`Server is running on ${host}:${port}`);
});