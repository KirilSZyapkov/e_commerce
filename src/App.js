import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from './components/HomePage';
import HeaderMenu from "./components/HeaderMenu";
import Footer from "./components/Footer";
import About from "./components/About";
// import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <>
    <HeaderMenu />
    
    <Routes>

      <Route exect path="/" element={<HomePage/>} />
      <Route path="/about-us" element={<About/>} />

    </Routes>
    <Footer/>
    </>
    

  );
}

export default App;