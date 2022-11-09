import React from "react";
import ExpenseCard from "../ExpenseCard/ExpenseCard";
import "./ExpenseItem.css";

function ExpenseItem() {
  const date = new Date();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className="expenses">
    <ExpenseCard />
    </div>
  );
}

export default ExpenseItem;
