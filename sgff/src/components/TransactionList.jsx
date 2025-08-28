const formatCurrency = (n) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(n);

function TransactionList({ transactions, removeTransaction }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Categoria</th>
          <th>Valor</th>
          <th>Data</th>
          <th>Vencimento</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((t) => (
          <tr key={t.id}>
            <td>{t.title}</td>
            <td>{t.category}</td>
            <td className={t.amount >= 0 ? "amount income" : "amount expense"}>
              {formatCurrency(t.amount)}
            </td>
            <td>{new Date(t.date).toLocaleDateString()}</td>
            <td>{t.dueDate ? new Date(t.dueDate).toLocaleDateString() : "—"}</td>
            <td>
              <button onClick={() => removeTransaction(t.id)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionList;
