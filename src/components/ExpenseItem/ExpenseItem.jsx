import React from "react";
import ExpenseCard from "../ExpenseCard/ExpenseCard";
import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expenses">
      <ExpenseCard />
    </div>
  );
}

export default ExpenseItem;
