import { Component } from "./styled";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useEffect } from 'react';


export default function Slider() {


  const theme = createTheme({
    status: {
      danger: '#e53e3e',  // Usando a cor vermelha como exemplo para 'danger'
    },
    palette: {
      primary: {
        main: '#00E5BC',  // Exemplo de cor azul para 'primary'
        darker: '#128c7e',  // Exemplo de cor azul mais escura para 'darker'
      },
      neutral: {
        main: '#64748B',  // Exemplo de cor neutra
        contrastText: '#F9FAFB',  // Exemplo de cor neutra clara
      },
    },
  });

  useEffect(() => {
    const esconderSplineViewer = () => {
      const splineViewerElement = document.getElementById('logo');

      if (splineViewerElement) {
        splineViewerElement.style.setProperty('display', 'none', 'important');
      }
    };
    esconderSplineViewer();
  }, []);




  return (
    <Component>
      <hgroup>
        <p className="topTitle">Temos as melhores</p>
        <h1>
          Soluções de<br />
          Cyber Segurança
        </h1>

        <p>
          Serviços especializados de pentesting para fortalecer sua segurança cibernética.
        </p>

        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="primary"
          >
            <i class="fa fa-share-square-o"></i>
            Veja mais
          </Button>

        </ThemeProvider>

      </hgroup>

      <div className="img">


      </div>

      <div className="video-container">
        <video autoPlay muted loop className="video-background">
          <source src="/background.mov" type="video/mov" />
          <source src="/background.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>

    </Component>
  )
}