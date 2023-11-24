import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import Transaction from "./models/Transaction.js";

const app = express();

app.use(express.json());

const connDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_DB_URI);
  if (conn) {
    console.log(" Mongodb connected successfully ");
  }
};

// post : /api/transactions
app.post("/api/transactions", async (req, res) => {
  const { amount, transactionType, category, description } = req.body;
  const transaction = new Transaction({
    amount,
    transactionType,
    category: category || "other",
    description,
  });
  try {
    const savedTransaction = await transaction.save();
    res.json({
      success: true,
      data: savedTransaction,
      message: "Transaction saved successfully",
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
});

app.get("/api/transactions", async (req, res) => {
  const transaction = await Transaction.find({});
  res.json({
    success: true,
    data: transaction,
    message: "Transaction fetch successfully",
  });
});

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
