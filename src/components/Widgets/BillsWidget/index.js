import React, { useState, useEffect } from "react";
import "./index.css";

import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";

import DefaultWidget from "../DefaultWidget";
import Check from "../../Buttons/Check";

import BillService from "../../../services/BillService";

export default function BillsWidget() {
  const [bills, setBills] = useState([{}]);

  useEffect(() => {
    BillService.fetchBills().then(bills => {
      setBills(bills);
    });
  }, []);

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
                {!bill.paid && (
                  <span className="bill-paid">
                    <Check />
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </DefaultWidget>
  );
}
