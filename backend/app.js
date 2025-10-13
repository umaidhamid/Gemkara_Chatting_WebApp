// server.js or index.js

import dotenv from "dotenv";
dotenv.config(); // Load .env first

import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import connect from "./Database/batabase.js";
import userModel from "./models/user.model.js";
import userRoute from "./routes/user.routes.js";
import projectRoute from "./routes/project.routes.js";

const app = express();

// Connect to MongoDB
connect();

// Middlewares
app.use(express.json());
app.use(cors({
   origin:"http://localhost:5173",
   credentials:true,
}));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

// Routes
app.use("/user", userRoute);
app.use("/project", projectRoute); 

// Default route
app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
