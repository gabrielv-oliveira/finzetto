import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Pentest from "./Pentest/Pentest";
import About from "./about/About";
import Loading from './components/loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule um carregamento assíncrono
    const fetchData = async () => {
      // Simula uma requisição demorada
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Router>
     {/*} {loading ? (
        <Loading />
     ) : (*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/avaliacao-de-seguranca-de-aplicacoes" element={<Pentest />} />
          <Route path="/quem-somos" element={<About />} />
        </Routes>{/*)}*/}
    </Router>
  );
}

export default App;
