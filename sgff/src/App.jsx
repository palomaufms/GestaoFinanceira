import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className="App">
      <Dashboard
        transactions={transactions}
        setTransactions={setTransactions}
      />
    </div>
  );
}

export default App;
