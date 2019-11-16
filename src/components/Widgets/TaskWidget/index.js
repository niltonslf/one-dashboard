import React, { useState } from "react";
import "./index.css";

import DefaultWidget from "../DefaultWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash, faTasks } from "@fortawesome/free-solid-svg-icons";

export default function TaskWidget() {
  const [tasks] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <DefaultWidget title="Tasks">
      <ul className="task-container" icon={<FontAwesomeIcon icon={faTasks} />}>
        {tasks.map(task => {
          return (
            <li className="task">
              <div className="task-date">
                <span className="task-hour">4:00PM</span>
                <span className="task-day">15/10 - Friday</span>
              </div>
              <span className="task-name">Clear the house</span>
              <div className="task-actions">
                <span className="task-done">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className="task-delete">
                  <FontAwesomeIcon icon={faTrash} />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </DefaultWidget>
  );
}
