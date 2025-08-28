import { useState, useEffect } from "react";

function TransactionForm({ addTransaction, categories }) {
  // categorias padrão caso não venham por props
  const CATS = categories?.length
    ? categories
    : ["Receita", "Alimentação", "Contas", "Lazer", "Transporte", "Saúde", "Educação", "Outros"];

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Receita");
  const [dueDate, setDueDate] = useState("");

  // se trocar para categoria diferente de "Contas", limpamos o vencimento
  useEffect(() => {
    if (category !== "Contas" && dueDate) setDueDate("");
  }, [category, dueDate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const val = Math.abs(parseFloat(amount || "0"));
    if (!val) return;

    // regra do sinal:
    // Receita -> positivo; demais -> negativo
    const signedAmount = category === "Receita" ? val : -val;

    addTransaction({
      id: Date.now(),
      title: title.trim(),
      amount: signedAmount,
      category,
      // dueDate só faz sentido para "Contas"
      dueDate: category === "Contas" && dueDate ? dueDate : null,
      date: new Date().toISOString(),
    });

    // limpar
    setTitle("");
    setAmount("");
    setCategory("Receita");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Descrição"
        required
      />

      <input
        type="number"
        step="0.01"
        min="0"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Valor (use número positivo)"
        required
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {CATS.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      {/* VENCIMENTO aparece só para categoria "Contas" */}
      {category === "Contas" && (
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          aria-label="Vencimento da conta"
        />
      )}

      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TransactionForm;
