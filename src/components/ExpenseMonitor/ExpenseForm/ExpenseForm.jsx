import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      title,
      amount,
      date: new Date(date),
    };
    props.setExpenses((prev) => {
      return prev.concat(newExpense);
    });
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={handleTitle} value={title} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input onChange={handleAmount} value={amount} type="number" min="1" step="1" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input onChange={handleDate} value={date} type="date" min="2019-01-01" step="2022-12-31" />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
