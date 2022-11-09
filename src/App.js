import ExpenseSection from "./components/ExpenseMonitor/ExpenseSection/ExpenseSection";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import { useState } from "react";

function App() {
  const [expenses , setExpenses] = useState()
  return (
    <div>
      <ExpenseSection expenses={expenses} setExpenses={setExpenses} />
      <ExpenseItem />
    </div>
  );
}

export default App;
