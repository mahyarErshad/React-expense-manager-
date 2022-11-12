import React, { useState } from "react";
import "./ExpenseSection.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

function ExpenseSection(props) {
  const [addANewExpense, setAddAnewExpense] = useState();
  return <div className="new-expense">{addANewExpense ? <ExpenseForm setExpenses={props.setExpenses} /> : <button>Add a new expense</button>}</div>;
}

export default ExpenseSection;
