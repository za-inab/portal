import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./db.js";
import { authRouter } from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

const uri = process.env.DB_URI.replace("USERNAME", process.env.DB_USER).replace(
  "PASSWORD",
  process.env.DB_PASSWORD
);

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

//API Endpoints
app.get("/", (req, res) => {
  res.json({ success: true, message: "APIs Working" });
});
app.use("/api/auth", authRouter);


app.listen(PORT,()=>{
    connectDB(uri);
    console.log('server listening on port ',PORT)
})