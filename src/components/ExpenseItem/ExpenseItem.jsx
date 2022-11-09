import React from "react";
import ExpenseCard from "../ExpenseCard/ExpenseCard";
import ExpenseFilter from "../ExpenseMonitor/ExpenseFilter/ExpenseFilter";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expenses">
      <ExpenseFilter />
      <ExpenseCard expenses={expenses} />
    </div>
  );
}

export default ExpenseItem;
