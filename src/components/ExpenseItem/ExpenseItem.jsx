import React from "react";
import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <h3>March 28th 2022</h3>
      <div className="expense-item__description">
        <h2>Car insurance</h2>
        <h3 className="expense-item__price">$294.25</h3>
      </div>
    </div>
  );
}

export default ExpenseItem;
