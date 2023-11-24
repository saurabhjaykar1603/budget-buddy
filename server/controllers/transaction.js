import Transaction from "../models/Transaction.js";

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
};

const getApiTransactions = async (req, res) => {
    const transaction = await Transaction.find({});
    res.json({
      success: true,
      data: transaction,
      message: "Transaction fetch successfully",
    });
  }

export { postApiTransaction ,getApiTransactions };
