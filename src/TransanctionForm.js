// Importing necessary modules and components
import React, { useState } from "react";
import Transaction from "./Transaction"; // Assuming this imports a custom Transaction component

// Defining the AddTransactionForm component
function AddTransactionForm() {
  // State variables to hold form data
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevents the default form submission behavior

    // Sending a POST request to the server to add the new transaction
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: date,
        description: description,
        category: category,
        amount: amount,
      }),
    });

    alert("added successfully"); // Show an alert to indicate that the transaction was added
  }

  // Rendering the form for adding a new transaction
  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="inline fields">
          {/* Input field for date */}
          <input value={date} onChange={(e) => setDate(e.target.value)} type="date" name="date" />

          {/* Input field for description */}
          <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" placeholder="Description" />

          {/* Input field for category */}
          <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" name="category" placeholder="Category" />

          {/* Input field for amount */}
          <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        {/* Submit button */}
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

// Exporting the AddTransactionForm component
export default AddTransactionForm;
