import React from "react";

// Defining the Transaction component as a functional component
function Transaction({ date, description, category, amount }) {
  // The component receives transaction details as props
  // and displays them in a table row (<tr>).

  return (
    <tr>
      {/* Displaying the date of the transaction */}
      <td>{date}</td>

      {/* Displaying the description of the transaction */}
      <td>{description}</td>

      {/* Displaying the category of the transaction */}
      <td>{category}</td>

      {/* Displaying the amount of the transaction */}
      <td>{amount}</td>
    </tr>
  );
}

// Exporting the Transaction component
export default Transaction;
