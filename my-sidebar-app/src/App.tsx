import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default App;
