import ExpenseSection from "./components/ExpenseMonitor/ExpenseSection/ExpenseSection";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);
  return (
    <div>
      <ExpenseSection setExpenses={setExpenses} />
      <ExpenseItem expenses={expenses} />
    </div>
  );
}

export default App;
