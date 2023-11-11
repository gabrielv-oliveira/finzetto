import { Component } from "./styled";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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



    </Component>
  )
}