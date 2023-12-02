import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import showToast from "crunchy-toast";
import axios from "axios";

function AddTransaction() {
  const [amount, setAmount] = useState("");
  const [TransactionType, setTransactionType] = useState("");
  const [category, setCategory] = useState("other");
  const [description, setDescripton] = useState("");

  useEffect(() => {
    const getloggedInUser = JSON.parse(localStorage.getItem("user" || "{}"));
    if (!getloggedInUser) {
      alert("login first");
      window.location.href = "/login";
    }
  }, []);

  const PostTransaction = async () => {
    if (!amount) {
      showToast("amount is required", "alert", 4000);
      return;
    }
    if (!TransactionType) {
      showToast("Transaction Type is required", "alert", 4000);
      return;
    }
    const user = JSON.parse(localStorage.getItem("user" || "{}"));
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/v2/transactions`,
      {
        user: user._id,
        amount: amount,
        transactionType: TransactionType,
        category: category,
        description: description,
      }
    );
    if (response?.data?.success) {
      alert(response?.data?.message);
      window.location.href = "/show_translations";
    } else {
      alert(response?.data?.message);
    }
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className=" mx-auto addtransaction-text">
        <h1 className="text-center mt-10  sm:text-3xl  font-bold text-xl text-red-500  ">
          Add Your Transactions
        </h1>
      </div>

      <div className="">
        <div
          className=" w-full sm:w-96 md:w-96 lg:w-96 xl:w-96 2xl:w-96 h-auto mx-auto mt-10 p-4 rounded-md"
          style={{ boxShadow: "2px 2px 8px rgb(0,0,0,0.3)" }}
        >
          <div className="form-container">
            <div className="pt-2 text-center ">
              <input
                type="number"
                className="w-80  border  bg-white  border-red-400 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-200 "
                placeholder="Enter Amount (₹)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="  w-80 mx-auto  mt-6 ">
              <div className="ms-4">
                <p className="text-start text-lg text-slate-700">
                  Select Transaction Type :
                </p>
              </div>
              <div className="flex items-center gap-x-3 justify-start ms-4 mt-3">
                <input
                  id="push-debit"
                  name="transaction-type"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  checked={TransactionType === "debit"}
                  onClick={() => {
                    setTransactionType("debit");
                  }}
                />
                <label
                  htmlFor="push-debit"
                  className="block text-base  font-medium leading-6 text-gray-700"
                >
                  Debit
                </label>

                <input
                  id="push-credit"
                  name="transaction-type"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  checked={TransactionType === "credit"}
                  onClick={() => {
                    setTransactionType("credit");
                  }}
                />
                <label
                  htmlFor="push-credit"
                  className="block text-base  font-medium leading-6 text-gray-700"
                >
                  Credit
                </label>
              </div>
            </div>

            <div className="mt-6 text-center ">
              <select
                className="w-80  text-gray-700 border  bg-white  border-red-400 rounded-md p-3 focus:outline-none focus:ring focus:border-blue-200 "
                name="category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value="other" disabled>
                  Select Category Here
                </option>
                <option value="food">Food</option>
                <option value="entertainment">Entertainment</option>
                <option value="travel">Travel</option>
                <option value="shopping">Shopping</option>
                <option value="education">Education</option>
                <option value="freelancing">Freelancing</option>
                <option value="salary">Salary</option>
                <option value="gift">Gift</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="text-center mt-7">
              <textarea
                class="border w-80 border-red-400 rounded-md p-2 resize-none focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter your Description Here"
                value={description}
                onChange={(e) => setDescripton(e.target.value)}
              ></textarea>
            </div>
            <button
              type="button"
              className="mx-auto mt-5  block bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue hover:bg-red-600 active:bg-blue-700"
              onClick={PostTransaction}
            >
              Add Transaction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTransaction;
