import React from "react";
import ExpenseCard from "../ExpenseCard/ExpenseCard";
import ExpenseFilter from "../ExpenseMonitor/ExpenseFilter/ExpenseFilter";
import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expenses">
      <ExpenseFilter />
      <ExpenseCard />
    </div>
  );
}

export default ExpenseItem;
