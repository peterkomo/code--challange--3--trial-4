import React from "react";
import Transaction from "./Transanction";

// Functional component to render a list of transactions in a table format
function TransactionsList({ transactions }) {
  // Map each transaction in the 'transactions' array to a <Transaction> component
  const list = transactions.map((item) => {
    // Pass each transaction's data as props to the <Transaction> component
    return (
      <Transaction
        key={item.id} // Use 'id' as the unique key for each transaction
        date={item.date}
        description={item.description}
        category={item.category}
        amount={item.amount}
      />
    );
  });

  const addTransaction = {

  }

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* Render the array of <Transaction> components */}
        {list}
      </tbody>
    </table>
  );
}

export default TransactionsList;


