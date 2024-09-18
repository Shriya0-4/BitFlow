import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import BuySell from "./components/buySell";
import Learn from "./components/Learn";
import TopGainers from "./components/topGainers";
import Holdings  from "./components/Holdings";
import Footer from "./components/footer";
import TradeAnywhere from "./components/Trade";
import CryptoBuy from "./components/CryptoBuy";
import Analyze from './components/analyze';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Learn />
            <BuySell />
            <TopGainers />
            <TradeAnywhere />
            <Footer />
          </>
        } />
        <Route path="/analyze" element={<Analyze/>} />
        <Route path="/holdings" element={<Holdings  user={{ name: 'John Doe' }} />} />
        <Route path="/buy" element={<CryptoBuy />} />
      </Routes>
      
    </Router>
  );
}

export default App;


