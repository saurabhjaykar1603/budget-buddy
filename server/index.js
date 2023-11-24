import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

const connDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_DB_URI);
  if (conn) {
    console.log(" Mongodb connected successfully ");
  }
};

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "status OK",
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
  connDB();
});