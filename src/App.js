import Search from "./SearchBar";
import Transaction from "./Transanction";
import TransactionsList from "./TransanctionList";

function App() {
  // State variables to manage transactions and search query
  const [transaction, setTransaction] = useState([]);
  const [query, setQuery] = useState("");

  // useEffect hook to fetch transactions when the search query changes
  useEffect(() => {
    // Fetch transactions from the API endpoint with the current search query
    fetch("https://api.npoint.io/74331edccd3a5c399ac2/transactions" + query)
      .then((resp) => resp.json())
      .then(transaction => setTransaction(transaction)); // Update the transaction state with the fetched data
  }, [query]); // The effect will re-run whenever the query state changes

  // Event handler for updating the search query
  function handleSearch(e) {
    setQuery(e.target.value); // Update the query state with the user's input value
  }

  return (
    <div>
      {/* Custom search bar component */}
      <Search />

      {/* Custom component to display a single transaction */}
      <Transaction />

      {/* Custom component to display a list of transactions */}
      <TransactionsList />

      
    </div>
  );
}

export default App;
