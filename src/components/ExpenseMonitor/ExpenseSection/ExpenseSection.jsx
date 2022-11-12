import React, { useState } from "react";
import "./ExpenseSection.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

function ExpenseSection(props) {
  const [addANewExpense , setAddAnewExpense] = useState()
  return (
    <div className="new-expense">
    <button>Add a new expense</button>
      <ExpenseForm setExpenses={props.setExpenses} />
    </div>
  );
}

export default ExpenseSection;
