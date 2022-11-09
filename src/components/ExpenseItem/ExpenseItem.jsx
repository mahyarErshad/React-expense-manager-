import React from "react";
import ExpenseCard from "../ExpenseCard/ExpenseCard";
import ExpenseFilter from "../ExpenseMonitor/ExpenseFilter/ExpenseFilter";
import "./ExpenseItem.css";

function ExpenseItem({ expenses }) {
  return (
    <div className="expenses">
      <ExpenseFilter />
      {expenses.length &&
        expenses.map((expenses) => {
          return <ExpenseCard expenses={expenses} />;
        })}
    </div>
  );
}

export default ExpenseItem;
