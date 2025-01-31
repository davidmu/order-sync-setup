import './App.css';
import ShopifyStoreForm from './Components/ShopifyStoreForm';
import ListShopifyStores from './Components/ListShopifyStores';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Suspense } from 'react';

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
  return (
    <Suspense>
      <ListShopifyStores fallback={<div>Loading...</div>}/> 
    </Suspense>
  )
}

function Addstore() {
  return <ShopifyStoreForm/>;
}

function Orders() {
  return <h2>Orders</h2>;
}

export default App;
