import React from "react";
import "./ExpenseItem.css";

function ExpenseItem() {
  const date = new Date();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-year">{year}</div>
        <div className="expense-day">{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>Car insurance</h2>
        <h3 className="expense-item__price">$294.25</h3>
      </div>
    </div>
  );
}

export default ExpenseItem;
