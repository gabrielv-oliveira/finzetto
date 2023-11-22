import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Pentest from "./Pentest/Pentest"; 
import About from "./about/About"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/avaliacao-de-seguranca-de-aplicacoes" element={<Pentest />} />
        <Route path="/quem-somos" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
