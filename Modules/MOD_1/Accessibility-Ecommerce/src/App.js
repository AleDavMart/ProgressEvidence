
import './App.css';
import data from './products.json';
import { Product } from './Product';


function App() {
  return (
    <div className="App">
       {data.products.map(product => <Product key={product.productId} product={product} />)}
      {data.products.length} products
    </div>
  );
}

export default App;