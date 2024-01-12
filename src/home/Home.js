import React, { useEffect } from 'react';
import { GlobalStyle } from "../styles/GlobalStyles";
import Navbar from "../components/menu/Nav";
import Slider from "../components/slyder";
import { Cards } from "../components/card";
import { Faq } from "../components/faq";
import { Targe } from "../components/targe";
import { Icon } from "../components/icon";
import { Footer } from "../components/footer";
import { About } from "../components/about";
import { Hide } from "../components/hide";
import { Contact } from '../components/contact';

export default function Home() {
   useEffect(() => {
      // Função para executar o código quando a página for carregada
      const esconderLogo = () => {
         const logoElement = document.getElementById('logo');

         if (logoElement) {
            logoElement.style.display = 'none';
         }
      };

      // Chama a função ao carregar a página
      esconderLogo();
   }, []);
   return (
      <>
         <GlobalStyle />
         <Navbar />
         <Slider />
         <Icon />
         <Cards />
         <Targe />
         <About />
         <Hide />
         <Faq />
         <Contact />
         <Footer />
      </>
   )




}