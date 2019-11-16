import React, { useState, useEffect } from "react";
import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";

import DefaultWidget from "../DefaultWidget";
import Check from "../../Buttons/Check";

import BillService from "../../../services/BillService";

export default function BillsWidget() {
  const [bills] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  useEffect(() => {
    BillService.fetchBills().then(bills => {
      console.log(bills);
    });
  }, []);

  return (
    <DefaultWidget title="Bills" icon={<FontAwesomeIcon icon={faMoneyBill} />}>
      <ul className="bills-container">
        {bills.map((bill, index) => {
          return (
            <li className="bill" key={index}>
              <div className="bill-date">
                <span className="bill-day">10/11</span>
                <span className="bill-day-week">Friday</span>
              </div>
              <span className="bill-type">Income</span>
              <span className="bill-value">1300,00</span>
              <span className="bill-name">Aluguel</span>
              <div className="bill-acions">
                <span className="bill-paid">
                  <Check />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </DefaultWidget>
  );
}
