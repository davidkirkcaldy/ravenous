import './App.css';
import BusinessList from './components/BusinessList.js';
import SearchBar from './components/SearchBar.js';

function App() {
  const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: "Pizza Schnell",
    address: "5 High Street",
    city: "Teddington",
    state: "surrey",
    zipCode: "11111",
    category: "Japanese",
    rating: 4,
    reviewCount: 90
}
  const businesses = [
    Object.create(business), 
    Object.create(business), 
    Object.create(business), 
    Object.create(business), 
    Object.create(business),
    Object.create(business),
    Object.create(business),
    Object.create(business)];
  return (
    <div>
      <SearchBar />
      <BusinessList businesses={businesses}/>
    </div>
  );
}

export default App;
