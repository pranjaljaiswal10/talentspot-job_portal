import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("*",(err,rreq,res,next)=>{
  console.log(err.stack),
  res.status(500).json("Something wen;t wrong")
})

connectDB()
  .then(() => {
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log("server running on port;", port);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection FAILED", err);
  });
