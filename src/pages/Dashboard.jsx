import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import BudgetCard from "../components/BudgetCard";
import BudgetManager from "../components/BudgetManager";
import Alerts from "../components/Alerts";

const CATEGORIES = [
  "Receita",
  "Alimentação",
  "Contas",
  "Lazer",
  "Transporte",
  "Saúde",
  "Educação",
  "Outros",
];

const formatCurrency = (n) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(n);

function Dashboard({ transactions, setTransactions, budgets, setBudgets }) {
  const income = transactions.filter((t) => t.amount > 0).reduce((a, t) => a + t.amount, 0);
  const expenses = transactions.filter((t) => t.amount < 0).reduce((a, t) => a + t.amount, 0);
  const balance = income + expenses;

  const addTransaction = (transaction) => setTransactions([...transactions, transaction]);
  const removeTransaction = (id) => setTransactions(transactions.filter((t) => t.id !== id));

  return (
    <main>
      <h1>SGFF - Dashboard</h1>

      <section className="kpis">
        <BudgetCard title="Receitas" value={formatCurrency(income)} />
        <BudgetCard title="Despesas" value={formatCurrency(expenses)} />
        <BudgetCard title="Saldo" value={formatCurrency(balance)} />
      </section>

      <section>
        <h2>Nova transação</h2>
        <TransactionForm addTransaction={addTransaction} categories={CATEGORIES} />
      </section>

      <section>
        <h2>Transações</h2>
        <TransactionList transactions={transactions} removeTransaction={removeTransaction} />
      </section>

      <section>
        <h2>Orçamentos</h2>
        <BudgetManager budgets={budgets} setBudgets={setBudgets} categories={CATEGORIES} />
      </section>

      <section>
        <h2>Alertas</h2>
        <Alerts transactions={transactions} budgets={budgets} />
      </section>
    </main>
  );
}

export default Dashboard;
