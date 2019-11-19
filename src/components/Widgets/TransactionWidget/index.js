import React, { useState, useEffect } from "react";
import "./index.css";

import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faCheck,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

import DefaultWidget from "../DefaultWidget";

import { Button } from "../../Buttons";

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

  async function payTransaction(id, isPaid) {
    const response = await TransactionService.togglePaymentStatus(id, !isPaid);
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
                <span
                  className={`tag ${
                    bill.type == "expense" ? "--pink" : "--green"
                  }`}
                >
                  {bill.type}
                </span>
              </span>
              <span className="bill-value">R$ {bill.price}</span>
              <span className="bill-name">{bill.description}</span>
              <div className="bill-acions">
                <span
                  className="bill-paid"
                  onClick={() => payTransaction(bill.id, bill.paid)}
                >
                  {!bill.paid ? (
                    <Button
                      color="green"
                      icon={<FontAwesomeIcon icon={faCheck} />}
                    />
                  ) : (
                    <Button
                      color="pink"
                      icon={<FontAwesomeIcon icon={faTimes} />}
                    />
                  )}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </DefaultWidget>
  );
}
