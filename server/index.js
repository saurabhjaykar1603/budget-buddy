import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import { getApiHealth } from "./controllers/health.js";
import {
  postApiv1Transaction,
  postApiv2Transaction,
  getApiTransactions,
  getApiTransactionById,
} from "./controllers/transaction.js";

import { postApiv1Signup, postApiv1Login } from "./controllers/user.js";

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Credentials", "true");

  next();
});

app.use(express.json());

const connDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_DB_URI);
  if (conn) {
    console.log(" Mongodb connected successfully ");
  }
};

// Users Endpoints
app.post("/api/v1/signups", postApiv1Signup);
app.post("/api/v1/logins", postApiv1Login);

// post : /api/transactions
app.post("/api/v1/transactions", postApiv1Transaction);
app.post("/api/v2/transactions", postApiv2Transaction); // v2 add user reference
app.get("/api/v1/transactions/user/:id", getApiTransactionById);

app.get("/api/transactions", getApiTransactions);

app.get("/api/health", getApiHealth);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
  connDB();
});
