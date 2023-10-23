import React from "react";
import "./App.css";
import { Header } from "./Components/Header/Heade";
import { ShopAdvert } from "./Components/ShopAdvert/ShopAdvert";
import { ShopCards } from "./Components/ShopCards/ShopCards";
import { Subscribe } from "./Components/Subscribe/Subscribe";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ShopAdvert />
      <ShopCards />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
