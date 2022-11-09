import ExpenseSection from "./components/ExpenseMonitor/ExpenseSection/ExpenseSection";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import { useState } from "react";

function App() {
  const [expenses , setExpense] = useState()
  return (
    <div>
      <ExpenseSection />
      <ExpenseItem />
    </div>
  );
}

export default App;
