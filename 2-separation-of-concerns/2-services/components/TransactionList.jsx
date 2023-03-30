import utilityService from "../services/utilityService";

function TransactionList({ transactions }) {
  const totalAmount = utilityService.calculateSum(
    transactions.map((transaction) => transaction.amount)
  );

  return (
    <div>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description} - {utilityService.formatDate(transaction.date, "MM/DD/YYYY")}
          </li>
        ))}
      </ul>
      <div>Total Amount: {totalAmount}</div>
    </div>
  );
}

export default TransactionList;
