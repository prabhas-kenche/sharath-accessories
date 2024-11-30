import { Routes, Route, Navigate } from 'react-router-dom';

import OrdersHistory from './components/OrdersHistory';
import Products from './components/Products';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import Favourites from './components/Favourites';

import './App.css';

const App = () => (
  <Routes>
    <Route exact path="/" element={<Products />} />
    <Route path='/ordershistory' element={<OrdersHistory />} />
    <Route path='/favourites' element={<Favourites />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/not-found" element={<NotFound />} />
    <Route path="*" element={<Navigate to="/not-found" />} /> {/* Catch-all for 404 */}
  </Routes>
);

export default App;
