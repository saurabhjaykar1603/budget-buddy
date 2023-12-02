import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

function ShowTransaction() {
  const [user, setUser] = useState({});
  const [myTransaction, setMyTransaction] = useState([]);

  const [debitSum, setDebitSum] = useState("");
  const [creditSum, setCreditSum] = useState("");

  let totalCredit = 0;
  let totalDebit = 0;

  const loadMyTransaction = async () => {
    const userId = user._id;
    if (!userId) {
      return;
    }
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/transactions/user/${userId}`
    );
    const transactionData = response?.data?.data;

    transactionData.forEach((transaction) => {
      if (transaction.transactionType === "credit") {
        totalCredit += transaction.amount;
      } else {
        totalDebit += transaction.amount;
      }
    });
    setCreditSum(totalCredit);
    setDebitSum(totalDebit);

    setMyTransaction(transactionData);
  };

  useEffect(
    () => {
      loadMyTransaction();
    },
    [user],
    [myTransaction]
  );

  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user" || "{}"));
    if (storageUser) {
      setUser(storageUser);
    } else {
      alert("Please login first");
      window.location.href = "/login";
    }
  }, []);

  return (
    <div>
      <div>
        <div>
          <Navbar />
        </div>
      </div>
      <h1 className="text-center mt-7 mb-3 text-3xl font-semibold text-red-500">
        My transaction
      </h1>
      <div className="  mx-auto w-3/6 bg-gray-10 sm:text-center lg:text-start">
        <p className="">
          {" "}
          Total <span className="text-red-600 font-bold">Debit </span> : -{" "}
          {debitSum}
        </p>
        <p className="mt-1">
          Total <span className="text-green-600 font-bold">Credit </span> :{" "}
          {creditSum}
        </p>
      </div>

      {myTransaction?.map((transaction, i) => {
        const {
          _id,
          amount,
          category,
          description,
          transactionType,
          createdAt,
        } = transaction;

        const date = new Date(createdAt).toLocaleDateString();
        const time = new Date(createdAt).toLocaleTimeString();
        const CATEGORY_EMOJI_MAP = {
          food: "Food 🍔",
          entertainment: " Entertainment 🎥",
          travel: "Travel 🛩",
          shopping: "Shopping 🛍️",
          education: "Education 🎓",
          other: "Other 🤷🏻‍♂️",
          freelancing: "Freelancing 👩🏻‍💻",
          salary: "Salary 💼",
          gift: "Gift 🎁  ",
        };
        return (
          <div
            key={i}
            className="transaction-card  border-2 my-3 w-3/6 mx-auto p-4 py-6 rounded-md relative"
            style={{ boxShadow: "3px 3px 2px rgba(0, 0, 0, 0.3)" }}
          >
            <p>
              <span
                className={`transaction-amt  font-bold ${
                  transactionType === "debit"
                    ? "text-red-500"
                    : "text-green-600"
                } `}
              >
                {transactionType === "debit" ? "-" : "+"} {amount}{" "}
              </span>
              <span
                className={`transaction-amt  font-semibold ${
                  transactionType === "debit"
                    ? "text-red-500"
                    : "text-green-600"
                } `}
              >
                {transactionType === "debit" ? "Debited" : "Credited"}
              </span>{" "}
              <span className="font-normal ms-1 text-neutral-600">
                on {date} at {time}
              </span>
            </p>

            <p className="absolute top-3 right-4 text-slate-800">
              {CATEGORY_EMOJI_MAP[category]}
            </p>
            <div className="border-b border border-gray-300 my-3"></div>
            <div className="description-container">
              <p className="text-gray-800">{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShowTransaction;
