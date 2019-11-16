import React, { useState } from "react";
import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill, faCheck } from "@fortawesome/free-solid-svg-icons";

import DefaultWidget from "../DefaultWidget";

export default function BillsWidget() {
  const [bills] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <DefaultWidget title="Bills" icon={<FontAwesomeIcon icon={faMoneyBill} />}>
      <ul className="bills-container">
        {bills.map(bill => {
          return (
            <li className="bill">
              <div className="bill-date">
                <span className="bill-day">10/11</span>
                <span className="bill-date-week">Friday</span>
              </div>
              <span className="bill-type">Iconme</span>
              <span className="bill-value">1300,00</span>
              <span className="bill-name">Aluguel</span>
              <div className="bill-acions">
                <span className="bill-paid">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </DefaultWidget>
  );
}
