import React from "react";
import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function Check() {
  return (
    <span className="button --check">
      <FontAwesomeIcon icon={faCheck} />
    </span>
  );
}
