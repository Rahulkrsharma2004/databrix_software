import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Contactus from "./components/Contactus";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/Contactus"  element={<Contactus />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
