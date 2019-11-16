import React from "react";
import "./index.css";
export default function DefaultWidget({ children, title, icon }) {
  return (
    <section className="widget-default">
      <div className="widget-header">
        <h2>{title}</h2>
        <span className="icon">{icon}</span>
      </div>
      <div className="widget-body">{children}</div>
    </section>
  );
}
