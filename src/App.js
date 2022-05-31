import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import ProductDetail from './pages/ProductDetail'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/detail/:product_id" element={<ProductDetail />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
