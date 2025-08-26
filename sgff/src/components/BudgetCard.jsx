function BudgetCard({ title, value }) {
  return (
    <div className="budget-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default BudgetCard;
