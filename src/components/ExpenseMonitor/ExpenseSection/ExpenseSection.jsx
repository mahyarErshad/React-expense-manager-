import React from "react";
import "./ExpenseSection.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

function ExpenseSection() {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
}

export default ExpenseSection;
