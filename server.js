import express from "express";
import dotenv from "dotenv";
import debug from "debug";
import cors from "cors";
import bodyParser from "body-parser";
import usersRoute from "./routes/UsersRoute.js";
import jobRoute from "./routes/JobRoute.js";

dotenv.config({ path: "./.env" });
const app = express();
const serverDebug = debug("server$");

const port = 8000 ;
const host =  "127.0.0.1";

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

app.use("/getaJob/users", usersRoute);
app.use("/getaJob/Job", jobRoute);

app.post("/hello", (req, res, next) => {
  serverDebug("hello world");
  res.send({ message: "hello how are you" });
});

app.listen(port, host, () => {
  console.log(`Server is running on ${host}:${port}`);
});