import './App.css';
import StoreItems from './components/StoreItems';

function App() {

  const storeData = [
    {
    "id" : 1,
    "name": "Hamburger",
    "price": 5.00,
    "inCart": false
    },
    {
    "id" : 2,
    "name": "French Fries",
    "price": 6.00,
    "inCart": false
    }
]

  return (
    <div>
      <StoreItems items={storeData} />
    </div>
  );
}

export default App;
