import React, { useState } from "react";
import ExpenseCard from "../ExpenseCard/ExpenseCard";
import ExpenseFilter from "../ExpenseMonitor/ExpenseFilter/ExpenseFilter";
import "./ExpenseItem.css";

function ExpenseItem({ expenses }) {
  const [selectedYear, setSelectedYear] = useState("2020")
  const filteredExpenses = () => {
    selectedYear.filter
  }
  return (
    <div className="expenses">
      <ExpenseFilter value={selectedYear} setSelectedYear={setSelectedYear} />
      {expenses.length &&
        expenses.map((expense) => {
          return <ExpenseCard key={expense.id} expenses={expense} />;
        })}
    </div>
  );
}

export default ExpenseItem;
