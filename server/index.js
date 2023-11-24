import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import { getApiHealth } from "./controllers/health.js";
import {
  postApiTransaction,
  getApiTransactions,
} from "./controllers/transaction.js";

const app = express();

app.use(express.json());

const connDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_DB_URI);
  if (conn) {
    console.log(" Mongodb connected successfully ");
  }
};

// post : /api/transactions
app.post("/api/transactions", postApiTransaction);

app.get("/api/transactions", getApiTransactions);

app.get("/api/health", getApiHealth);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
  connDB();
});
