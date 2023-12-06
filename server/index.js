import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import path from "path";

import { getApiHealth } from "./controllers/health.js";
import {
  postApiv1Transaction,
  postApiv2Transaction,
  getApiTransactions,
  getApiTransactionById,
  deleteApiv1TransactionById,
  putApiv1TransactionById,
  getApiv1Transaction,
} from "./controllers/transaction.js";

import { postApiv1Signup, postApiv1Login } from "./controllers/user.js";

const app = express();
app.use(express.json());

const __dirname = path.resolve();

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
app.get("/api/v1/transactions/:id", getApiv1Transaction); //  get information about transaction by id
app.delete("/api/v1/transactions/:id", deleteApiv1TransactionById);
app.put("/api/v1/transactions/:id", putApiv1TransactionById);

app.get("/api/transactions", getApiTransactions);

app.get("/api/health", getApiHealth);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "client", "dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
  });
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
  connDB();
});
