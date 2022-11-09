import React from "react";
import "./ExpenseItem.css";

function ExpenseItem() {
  const date = new Date();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className="expenses">

    </div>
  );
}

export default ExpenseItem;
