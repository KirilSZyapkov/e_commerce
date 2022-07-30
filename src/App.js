import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from './components/HomePage';
import HeaderMenu from "./components/HeaderMenu";
import Footer from "./components/Footer";
import About from "./components/About";
import Catalog from "./components/Catalog";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
// import SingleProduct from "./components/SingleProduct";



function App() {

   return (
    <ShoppingCartProvider>
      <HeaderMenu />
      
        <Routes>

          <Route exect path="/" element={<HomePage/>} />
          <Route path="/about-us" element={<About/>} />
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/contact-us" element={<Contact/>} />
          <Route path="/blog" element={<Blog/>} />

        </Routes>
      <Footer/>
    </ShoppingCartProvider>
    

  );
}

export default App;