import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "../api/routes/auth-routes.js";

const app = express();
dotenv.config();
// parsing data to json
app.use(express.json());

mongoose
  .connect(process.env.MONGO_STR)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => console.log(err));

//   API  calls
app.use("/api/auth", authRoutes);

// Listening on port
app.listen(3000, () => {
  console.log(`server is running on port 3000 !!!`);
});

// middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const statusMessage = err.statusMessage || "Internal server error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    statusMessage,
  });
});
