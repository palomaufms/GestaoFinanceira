import { useEffect, useState } from "react";

const startOfMonth = (d = new Date()) => new Date(d.getFullYear(), d.getMonth(), 1);
const endOfMonth = (d = new Date()) => new Date(d.getFullYear(), d.getMonth() + 1, 0);

function Alerts({ transactions, budgets }) {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const today = new Date();
    const monthStart = startOfMonth(today);
    const monthEnd = endOfMonth(today);
    const newAlerts = [];

    // 1) Contas a vencer (categoria "Contas") em até 7 dias / vencidas
    transactions.forEach((t) => {
      if (t.category === "Contas" && t.dueDate) {
        const due = new Date(t.dueDate);
        const diffDays = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
        if (diffDays < 0) {
          newAlerts.push(`⛔ ${t.title} está vencida há ${Math.abs(diffDays)} dia(s)!`);
        } else if (diffDays <= 7) {
          newAlerts.push(`⚠️ ${t.title} vence em ${diffDays} dia(s).`);
        }
      }
    });

    // 2) Orçamentos estourados no mês atual
    budgets.forEach((b) => {
      // somar apenas despesas (valores negativos) da categoria, dentro do mês atual
      const totalSpent = transactions
        .filter((t) => {
          const d = new Date(t.date);
          return (
            t.category === b.category &&
            t.amount < 0 &&
            d >= monthStart &&
            d <= monthEnd
          );
        })
        .reduce((sum, t) => sum + Math.abs(t.amount), 0); // usar módulo (gasto positivo)

      if (totalSpent > b.limit) {
        const excedente = (totalSpent - b.limit).toFixed(2);
        newAlerts.push(`🚨 Orçamento de ${b.category} estourado em R$ ${excedente}.`);
      }
    });

    setAlerts(newAlerts);
  }, [transactions, budgets]);

  return (
    <div className="alerts">
      <h3>Alertas</h3>
      {alerts.length ? (
        <ul>
          {alerts.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      ) : (
        <p>✅ Nenhum alerta no momento</p>
      )}
    </div>
  );
}

export default Alerts;
