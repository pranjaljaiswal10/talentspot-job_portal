import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import connectDB from "./db/index.js";
import userRouter from "./routes/user.route.js";
import jobsRouter from "./routes/jobs.route.js";
import companyRouter from "./routes/company.route.js";

dotenv.config({
  path: "./.env",
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin:process.env.CORS_ORIGIN,
  credentials:true
}))

app.use("/api/v1/user",userRouter)
app.use("/api/v1/jobs",jobsRouter)
app.use("/api/v1/company",companyRouter)

app.use("*",(err,rreq,res,next)=>{
  console.log(err.stack),
  res.status(500).json("Something wen;t wrong")
})

connectDB()
  .then(() => {
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log("server running on port:", port);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection FAILED", err);
  });
