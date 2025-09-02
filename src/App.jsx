import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );
  const [budgets, setBudgets] = useState(
    JSON.parse(localStorage.getItem("budgets")) || []
  );

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem("budgets", JSON.stringify(budgets));
  }, [budgets]);

  return (
    <div className="App">
      <Dashboard
        transactions={transactions}
        setTransactions={setTransactions}
        budgets={budgets}
        setBudgets={setBudgets}
      />
    </div>
  );
}

export default App;
