import ExpenseSection from "./components/ExpenseMonitor/ExpenseSection/ExpenseSection";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);
  console.log(expenses);
  return (
    <div>
      <ExpenseSection setExpenses={setExpenses} />
      <ExpenseItem />
    </div>
  );
}

export default App;
