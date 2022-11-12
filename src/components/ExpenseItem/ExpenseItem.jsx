import React, { useState } from "react";
import ExpenseCard from "../ExpenseCard/ExpenseCard";
import ExpenseFilter from "../ExpenseMonitor/ExpenseFilter/ExpenseFilter";
import "./ExpenseItem.css";

function ExpenseItem({ expenses }) {
  const [selectedYear, setSelectedYear] = useState("2020");
  const filteredByYear = expenses.filter((expenses) =>{
    return expenses.date.getFullYear().toString() === selectedYear.toString()
  })

  return (
    <div className="expenses">
      <ExpenseFilter value={selectedYear} setSelectedYear={setSelectedYear} />
      {filteredByYear.length &&
        filteredByYear.map((expense) => {
          return <ExpenseCard key={expense.id} expenses={expense} />;
        })}
    </div>
  );
}

export default ExpenseItem;
