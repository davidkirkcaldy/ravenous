import './App.css';
import Business from './components/Business.js';
import BusinessList from './components/BusinessList.js';
import SearchBar from './components/SearchBar.js';

function App() {
  return (
    <div>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
