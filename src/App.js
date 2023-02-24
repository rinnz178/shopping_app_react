import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import { BrowserRouter as Router,Routes, Route, } from "react-router-dom";
import Footer from "./Components/Footer";
import { useState,useEffect } from "react";
import ProductDetail from "./Pages/ProductDetail";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="App font-face-gm">
    {loading ? (
      <div className="loader-container">
      	  <div className="spinner"></div>
        </div>
      ) : (
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Navbar/>
          <Routes>
           
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<Shop/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/products/:id' element={<ProductDetail/>}/>
          </Routes>
          <Footer/>
        </div>
      </Router>
      )}
    </div>
  );
}

export default App;
