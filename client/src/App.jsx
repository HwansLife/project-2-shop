import "./App.css";
import Product from "./pages/Product";
import Home from './pages/Home';
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/products/:category">
          <ProductList/>
        </Route>
        <Route path="/products/:id">
          <Product/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/products/:id">
          <Product/>
        </Route>
      </Switch>
    </Router>
    )
};

export default App;
