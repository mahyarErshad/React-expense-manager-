import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  return (
    <div>
      <form className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={handleTitle} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input onChange={handleAmount} type="number" min="0.1" step="0.1" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input onChange={handleDate} type="date" min="2019-01-01" step="2022-12-31" />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
