import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import ProductDetail from './pages/ProductDetail'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './pages/SignIn';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './state/StateProvider';

function App() {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch({ type: 'SET_USER', user });
      } else {
        dispatch({ type: 'SET_USER', user: null });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/detail/:product_id" element={<ProductDetail />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
