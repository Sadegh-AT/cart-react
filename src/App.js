import logo from "./logo.svg";
import "./App.css";

// Product
import Product from "./Components/Product/Product";

// Cart
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Product></Product>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
