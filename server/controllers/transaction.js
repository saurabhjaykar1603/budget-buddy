import Transaction from "../models/Transaction.js";
import { responder } from "./../utils.js";

const postApiv1Transaction = async (req, res) => {
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

const postApiv2Transaction = async (req, res) => {
  const { user, amount, transactionType, category, description } = req.body;
  const transaction = new Transaction({
    user,
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

const getApiTransactionById = async (req, res) => {
  const { id } = req.params;
  const findUser = await Transaction.find({ user: id }).populate("user");

  findUser.forEach((transaction) => {
    transaction.user.password = undefined;
  });
  res.json({
    success: true,
    data: findUser,
    message: "transaction successfully fetch by user ",
  });
};

const deleteApiv1TransactionById = async (req, res) => {
  const { id } = req.params;

  try {
    await Transaction.deleteOne({ _id: id });
    res.status(200).json({
      success: true,
      message: "Transaction deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export {
  postApiv1Transaction,
  getApiTransactions,
  postApiv2Transaction,
  getApiTransactionById,
  deleteApiv1TransactionById,
};
