import React, { useState } from "react";
import "./ExpenseSection.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

function ExpenseSection(props) {
  const [addANewExpense, setAddAnewExpense] = useState(false);
  return <div className="new-expense">{addANewExpense ? <ExpenseForm setAddAnewExpense={setAddAnewExpense} setExpenses={props.setExpenses} /> : <button onClick={()=> setAddAnewExpense(true)}>Add a new expense</button>}</div>;
}

export default ExpenseSection;
