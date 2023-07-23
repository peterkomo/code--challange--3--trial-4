// Importing the necessary modules and components
import React from "react";
import Transaction from "./Transaction";

// Defining the TransactionsList component as a functional component
function TransactionsList({ transactions }) {
  // The component receives an array of transactions as a prop and maps through each transaction to render <Transaction> components.

  // Mapping through the transactions array to create a list of <Transaction> components
  const list = transactions.map((item) => {
    return (
      <Transaction
        key={item.id}
        date={item.date}
        description={item.description}
        category={item.category}
        amount={item.amount}
      />
    );
  });

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          {/* Table header */}
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

        {/* Rendering a list of <Transaction> components here */}
        {list}
      </tbody>
    </table>
  );
}

//
