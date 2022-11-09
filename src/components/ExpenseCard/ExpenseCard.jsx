import React from "react";
import "../ExpenseItem/ExpenseItem.css";

function ExpenseCard({expenses}) {
  const month = expenses.date.toLocaleString("en-US", { month: "long" });
  const day = expenses.date.toLocaleString("en-US", { day: "2-digit" });
  const year = expenses.date.getFullYear();
  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-year">{year}</div>
        <div className="expense-day">{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{expenses.title}</h2>
        <h3 className="expense-item__price">${expenses.amount}</h3>
      </div>
    </div>
  );
}

export default ExpenseCard;
