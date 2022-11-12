import React, { useState } from "react";
import ExpenseCard from "../ExpenseCard/ExpenseCard";
import ExpenseFilter from "../ExpenseMonitor/ExpenseFilter/ExpenseFilter";
import "./ExpenseItem.css";

function ExpenseItem({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2020")

  return (
    <div className="expenses">
      <ExpenseFilter value={filteredYear} setFilteredYear={setFilteredYear} />
      {expenses.length &&
        expenses.map((expense) => {
          return <ExpenseCard key={expense.id} expenses={expense} />;
        })}
    </div>
  );
}

export default ExpenseItem;
