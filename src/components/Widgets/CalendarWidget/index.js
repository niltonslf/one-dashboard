import React, { useState } from "react";
import "./index.css";

import DefaultWidget from "../DefaultWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function CalendarWidget() {
  const [events] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <DefaultWidget
      title="Calendar"
      icon={<FontAwesomeIcon icon={faCalendar} />}
    >
      <ul className="calendar-container">
        {events.map((event, index) => {
          return (
            <li className="event" key={index}>
              <span className="event-day-number">15</span>
              <div className="event-date">
                <span>November</span>
                <span>friday</span>
                <span>6:30am</span>
              </div>
              <span className="event-name">Lançamento do app bora lá</span>
            </li>
          );
        })}
      </ul>
    </DefaultWidget>
  );
}
