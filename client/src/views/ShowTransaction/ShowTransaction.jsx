import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import deletePng from "./delete.png";
import editPng from "./edit.png";
import "./ShowTransaction.css";
import Footer from "../../components/Footer/Footer";

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
      swal({
        title: `👋 Hey Buddy ! `,
        text: "Please log in to access the show transaction page",
        icon: "warning",
      }).then(() => {
        window.location.href = "/login";
      });
    }
  }, []);

  const deleteTransition = async (_id) => {
    const response = await axios.delete(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/transactions/${_id}`
    );
    if (response?.data?.message) {
      loadMyTransaction();
    }
  };

  return (
    <div>
      <div>
        <div>
          <Navbar />
        </div>
      </div>
      <h1 className="text-center mt-7 mb-3 lg:text-3xl sm:text-indigo-500, text-3xl ,lg:font-semibold text-red-500">
        My transactions
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
          <div className="p-3 " key={i}>
            <div
              data-aos="zoom-in"
              className="transaction-card  border-2 my-3 lg:w-3/6 md:w-4/5  mx-auto p-4 py-6 rounded-md relative"
              style={{ boxShadow: "3px 3px 2px rgba(0, 0, 0, 0.3)" }}
            >
              <p className=" lg:text-base sm:text-base, mt-5 lg:mt-0">
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
              <div className="description-container py-2">
                <p className="text-gray-800">{description}</p>
              </div>
              <img
                src={deletePng}
                alt="deletePng"
                className="absolute bottom-2 right-5 h-8 p-1 bg-slate-100 border-2 border-red-400 rounded-full cursor-pointer shadow-lg"
                onClick={() => {
                  swal({
                    title: "Are you sure  ?",
                    text: "Once deleted, you will not be able to recover this transaction!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  }).then((willDelete) => {
                    if (willDelete) {
                      deleteTransition(_id);
                    } else {
                      swal("Your transaction is safe!");
                    }
                  });
                }}
              />
              {/* there anchore tag use for redirection to transaction id at  /update_translations path */}
              <img
                src={editPng}
                alt="deletePng"
                className="absolute bottom-3 right-16 h-7   cursor-pointer "
                onClick={() => {
                  return swal({
                    icon: "info",
                    title: "Are you sure you want edit transition ?",
                    buttons: ["Cancel", "Yes"],
                  }).then((userConfirmed) => {
                    if (userConfirmed) {
                      // User clicked "Yes", proceed with edit Transition
                      window.location.href = `/update_translations/${_id}`;

                      editTransition(_id);
                    } else {
                      // User clicked "Cancel"
                      swal("ok no ploblem ");
                    }
                  });
                }}
              />{" "}
            </div>
          </div>
        );
      })}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default ShowTransaction;
