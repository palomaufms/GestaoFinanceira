function TransactionList({ transactions, removeTransaction }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Data</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((t, index) => (
          <tr key={index}>
            <td>{t.title}</td>
            <td>{t.amount}</td>
            <td>{new Date(t.date).toLocaleDateString()}</td>
            <td>
              <button onClick={() => removeTransaction(index)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionList;
