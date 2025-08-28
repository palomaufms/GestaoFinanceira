import { useState } from "react";

function BudgetManager({ budgets, setBudgets, categories }) {
  const EXP_CAT = (categories?.length
    ? categories
    : ["Receita", "Alimentação", "Contas", "Lazer", "Transporte", "Saúde", "Educação", "Outros"]
  ).filter((c) => c !== "Receita");

  const [category, setCategory] = useState(EXP_CAT[0] || "Alimentação");
  const [limit, setLimit] = useState("");

  const addOrUpdateBudget = (e) => {
    e.preventDefault();
    const lim = Math.abs(parseFloat(limit || "0"));
    if (!lim) return;

    const exists = budgets.find((b) => b.category === category);
    if (exists) {
      setBudgets(budgets.map((b) => (b.category === category ? { ...b, limit: lim } : b)));
    } else {
      setBudgets([...budgets, { category, limit: lim }]);
    }
    setLimit("");
  };

  return (
    <div>
      <h3>Gerenciar Orçamentos</h3>
      <form onSubmit={addOrUpdateBudget} className="form-inline">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {EXP_CAT.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <input
          type="number"
          step="0.01"
          min="0"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          placeholder="Limite mensal (R$)"
          required
        />
        <button type="submit">Salvar orçamento</button>
      </form>

      <ul>
        {budgets.map((b, i) => (
          <li key={i}>
            {b.category}: R$ {b.limit}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BudgetManager;
