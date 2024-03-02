import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Menu from "./Menu";
import Home from "./Home";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          {/* Add more Route components for other sections */}
        </Routes>
        {/* Add Route components for other pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
