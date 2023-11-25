import Transaction from "../models/Transaction.js";
import { responder } from "./../utils.js";

const postApiTransaction = async (req, res) => {
  const { amount, transactionType, category, description } = req.body;
  const transaction = new Transaction({
    amount,
    transactionType,
    category: category || "other",
    description,
  });
  try {
    const savedTransaction = await transaction.save();
    return responder({
      res,
      success: true,
      message: "Transaction saved successfully",
      data: savedTransaction,
    });
  } catch (err) {
    return responder({
      success: false,
      message: err.message,
    });
  }
};

const getApiTransactions = async (req, res) => {
  const transaction = await Transaction.find({});
  return responder({
    res,
    success: true,
    data: transaction,
    message: "Transaction fetch successfully",
  });
};

export { postApiTransaction, getApiTransactions };
