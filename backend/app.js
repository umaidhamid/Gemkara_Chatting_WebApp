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
import usersRoute from "./routes/users.routes.js";

const app = express();

connect();
app.use(express.json());
const allowedOrigins = [
  "http://localhost:5173", // Local Vite
  "https://gemkara-chat.vercel.app", // Vercel Frontend
  "https://gemkara.onrender.com", // If deployed frontend on Render as well
];

// ✅ CORS Protection
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("🚫 Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

// Routes
app.use("/user", userRoute);
app.use("/project", projectRoute);
app.use("/users", usersRoute);
// Default route
app.get("/", (req, res) => {
  res.send("backend is running...");
});

export default app;
