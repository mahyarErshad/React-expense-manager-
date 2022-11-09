import React from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <div>
      <form className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.1" step="0.1" />
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
