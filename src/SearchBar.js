// Importing the necessary modules
import React from "react";

// Defining the Search component as a functional component
function Search({ handleSearch }) {
  // The component receives a prop called 'handleSearch', which is a function to handle user input for searching transactions.

  return (
    <div className="ui large fluid icon input">
      {/* Input field for search */}
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
      />

      {/* Search icon */}
      <i className="circular search link icon"></i>
    </div>
  );
}

// Exporting the Search component
export default Search;

