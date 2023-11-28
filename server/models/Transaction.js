import { Schema, model } from "mongoose";

const TransactionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  transactionType: {
    type: String,
    enum: ["credit", "debit"],
    required: true,
  },
  category: {
    type: String,
    enum: [
      "food",
      "entertainment",
      "travel",
      "shopping",
      "education",
      "other",
      "freelancing",
      "salary",
      "gift",
    ],
    default: "other",
  },
  description: {
    type: String,
    required: true,
  },
});

const Transaction = model("Transaction", TransactionSchema);
export default Transaction;
