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
      </form>
    </div>
  );
}

export default ExpenseForm;
