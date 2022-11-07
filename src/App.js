import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Carousal from "./components/Carousal/Carousal";
import Services from "./components/Services/Sevices";
import styles from "./App.module.css";
import Products from "./components/Products/Products";
import Providers from "./components/Providers/Providers";
import Footer from "./components/Footer/Footer";
import Sticky from "./components/Navbar/Sticky";
import Works from "./components/Works/Works";

function App() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Navbar />
        <Sticky />
        <Carousal />
        <Services />
        <Products />
        <Providers />
        <Works/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
