import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      lowercase: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
      lowercase: true,
    },
    bankName: {
      type: String,
      enum: [
        "kotak",
        "maharashtra-bank",
        "sbi",
        "hdfc",
        "axis",
        "badoda",
        "other",
      ],
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);
export default User;
