import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import BudgetCard from "../components/BudgetCard";

function Dashboard({ transactions, setTransactions }) {
  const income = transactions
    .filter(t => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter(t => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income + expenses;

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const removeTransaction = (index) => {
    const newTransactions = [...transactions];
    newTransactions.splice(index, 1);
    setTransactions(newTransactions);
  };

  return (
    <main>
      <h1>SGFF - Dashboard</h1>
      <BudgetCard title="Receita" value={income} />
      <BudgetCard title="Despesa" value={expenses} />
      <BudgetCard title="Saldo" value={balance} />
      
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList
        transactions={transactions}
        removeTransaction={removeTransaction}
      />
    </main>
  );
}

export default Dashboard;
