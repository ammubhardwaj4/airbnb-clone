import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/Home";
import SearchPage from "./components/search/searchPage/SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Header */}
        <Header />
        <Routes>
          {/* Home*/}
          <Route path="/" element={<Home />} />

          {/* Banner */}
          {/* Search*/}
          <Route path="/search" element={<SearchPage />} />
          {/* Cards */}
        </Routes>
        {/* Footer */}
        <Footer />
        {/* SearchPage */}
        {/* ..... */}
      </Router>
    </div>
  );
}

export default App;
