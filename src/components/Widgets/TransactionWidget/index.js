import React, { useState, useEffect } from "react";
import "./index.css";

import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";

import DefaultWidget from "../DefaultWidget";
import Check from "../../Buttons/Check";
import Delete from "../../Buttons/Delete";

import TransactionService from "../../../services/TransactionService";

export default function TransactionWidget() {
  const [bills, setBills] = useState([{}]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  function fetchTransactions() {
    TransactionService.fetchTransactions().then(bills => {
      setBills(bills);
    });
  }

  async function payTransaction(id) {
    const response = await TransactionService.payTransaction(id);
    if (response) fetchTransactions();
  }

  return (
    <DefaultWidget title="Bills" icon={<FontAwesomeIcon icon={faMoneyBill} />}>
      <ul className="bills-container">
        {bills.map((bill, index) => {
          return (
            <li className="bill" key={index}>
              <div className="bill-date">
                <span className="bill-day">
                  {moment(bill.date).format("D/M/Y")}
                </span>
                <span className="bill-day-week">{bill.weekday}</span>
              </div>
              <span className="bill-type">
                <span className="tag">{bill.type}</span>
              </span>
              <span className="bill-value">R$ {bill.price}</span>
              <span className="bill-name">{bill.description}</span>
              <div className="bill-acions">
                <span
                  className="bill-paid"
                  onClick={() => payTransaction(bill.id)}
                >
                  {!bill.paid ? <Check /> : <Delete />}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </DefaultWidget>
  );
}
