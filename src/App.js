import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Pentest from "./Pentest/Pentest";
import About from "./about/About";
import Home from "./home/Home";

AOS.init({ delay: 50 });
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
