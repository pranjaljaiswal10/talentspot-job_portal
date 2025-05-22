import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser"
import connectDB from "./db/index.js";
import userRouter from "./routes/user.route.js";
import jobsRouter from "./routes/jobs.route.js";
import companyRouter from "./routes/company.route.js";
import applicantionRouter from "./routes/application.route.js";

dotenv.config({
  path: "./.env",
});

const app = express();

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin:process.env.CORS_ORIGIN,
  credentials:true
}))

app.use("/api/v1/users",userRouter)
app.use("/api/v1/jobs",jobsRouter)
app.use("/api/v1/companies",companyRouter)
app.use("/api/v1/application",applicantionRouter)


app.use("*",(err,req,res,next)=>{
  console.log(err.stack),
  res.status(500).json("Something went wrong")
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
