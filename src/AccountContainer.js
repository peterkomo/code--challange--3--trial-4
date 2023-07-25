// Import required modules from React and other components
import React, { useEffect, useState } from "react";
import TransactionsList from "./TransanctionList";
import AddTransactionForm from "./TransanctionForm";
import Transaction from "./Transanction";
import Search from "./SearchBar";
import DeleteButton from "./DeleteButton";

// Define the AccountContainer component
function AccountContainer() {
  // Define state variables using the useState hook
  const [transaction, setTransaction] = useState([]); // State to store the list of transactions
  const [query, setQuery] = useState(""); // State to store the search query entered by the user

  // useEffect hook to fetch transactions from the API when the 'query' state changes
  useEffect(() => {
    // Fetch transactions from the API based on the search 'query'
    fetch("https://api.npoint.io/74331edccd3a5c399ac2/transactions" + query)
      .then((resp) => resp.json()) // Convert the response to JSON format
      .then(transaction => setTransaction(transaction)); // Update the 'transaction' state with the fetched data
  }, [query]); // The effect will run whenever the 'query' state changes

  // Function to handle user input for searching transactions
  function handleSearch(e) {
    setQuery(e.target.value); // Update the 'query' state with the value entered by the user
  }

  // Render the component
  return (
    <div>
      {/* Render the Search component, passing 'handleSearch' function as a prop */}
      <Search handleSearch={handleSearch}/>

      {/* Render the AddTransactionForm component (form to add new transactions) */}
      <AddTransactionForm />

      {/* Render the TransactionsList component, passing 'transaction' state as a prop */}
      <TransactionsList transactions={transaction} />
      <Transaction/>
      <DeleteButton/>
    </div>
  );
}

// Export the AccountContainer component to be used in other parts of the application
export default AccountContainer;

