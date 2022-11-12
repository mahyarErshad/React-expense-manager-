import React, { useState } from "react";
import ExpenseCard from "../ExpenseCard/ExpenseCard";
import ExpenseFilter from "../ExpenseMonitor/ExpenseFilter/ExpenseFilter";
import ChartWrapper from "../ExpenseMonitor/ExpenseChart/ChartWrapper/ChartWrapper"
import "./ExpenseItem.css";

function ExpenseItem({ expenses }) {
  const [selectedYear, setSelectedYear] = useState("2023");
  const filteredByYear = expenses.filter((expenses) =>{
    return expenses.date.getFullYear().toString() === selectedYear.toString()
  })

  return (
    <div className="expenses">
    <ChartWrapper expenses={filteredByYear} />
      <ExpenseFilter value={selectedYear} setSelectedYear={setSelectedYear} />
      {filteredByYear.length ?
        filteredByYear.map((expense) => {
          return <ExpenseCard key={expense.id} expenses={expense} />;
        }) : <p className="expenses-list__fallback">No expenses found!</p> }
    </div>
  );
}

export default ExpenseItem;
