import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <SearchBar />
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
