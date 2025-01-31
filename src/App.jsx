import './App.css';
import ShopifyStoreForm from './Components/ShopifyStoreForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Stores</Link>
          </li>
          <li>
            <Link to="/addstore">Add store</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/addstore" element={<Addstore/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/" element={<Stores/>}/>
      </Routes>
    </div>
  </Router>
  );
}
function Stores() {
  return <h2>List Stores</h2>;
}

function Addstore() {
  return <ShopifyStoreForm/>;
}

function Orders() {
  return <h2>Orders</h2>;
}

export default App;
