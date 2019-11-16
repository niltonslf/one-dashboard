import React from "react";
import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function Delete() {
  return (
    <span className="button --delete">
      <FontAwesomeIcon icon={faTrash} />
    </span>
  );
}
