import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';

// pages
import {
  Home,
  Shirts,
  Shoes,
  HeadPhones,
  About,
  Cart,
  AllProducts,
  SingleProduct,
  Error,
} from './pages';

// components
import Navbar from './components/Navbar/Navbar';
import CartSidebar from './components/CartSidebar/CartSidebar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

// scroll to top component
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <CartSidebar />
      <Sidebar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jordans" element={<Shirts />} />
      <Route path="/airmaxs" element={<Shoes />} />
      <Route path="/converse" element={<HeadPhones />} />
      <Route path="/about" element={<About />} />
      <Route path="/card" element={<Cart />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/error" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
