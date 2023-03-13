import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/pages/Home";
import Pricing from "./components/screens/Pricing";
import Product from "./components/screens/Product";
import Receipe from "./components/screens/Receipe";
import "./App.css";
import Galleries from "./components/screens/Galleries";

const App = () => {
  return (
    <div>
      <Header />
      <img src="./images/carousal.gif" className="w-100" alt="" />
      <Product />
      <Pricing />
      <Galleries />
      <Receipe />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
