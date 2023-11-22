import { Component } from "./styles"
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export function About() {
  const theme = createTheme({
    status: {
      danger: '#e53e3e',  // Usando a cor vermelha como exemplo para 'danger'
    },
    palette: {
      primary: {
        main: '#FFA904',  // Exemplo de cor azul para 'primary'
        darker: '#ED713C',  // Exemplo de cor azul mais escura para 'darker'
      },
      neutral: {
        main: '#64748B',  // Exemplo de cor neutra
        contrastText: '#F9FAFB',  // Exemplo de cor neutra clara
      },
    },
  });
  return (
    <Component id="about">
      <hgroup>
        <h2>Elevando a sua Segurança Cibernética </h2>
        <p>Nosso compromisso é oferecer aos clientes soluções de segurança cibernética excepcionais, destacando-nos por meio de abordagens ágeis, inteligentes e inovadoras. Através da otimização segura dos processos de negócio, visamos proteger de maneira robusta os dados e informações, navegando eficazmente em um cenário cada vez mais digital e interconectado.</p>
        <p>Colocamos a satisfação do cliente no centro de nossa abordagem, priorizando ouvir e compreender suas necessidades únicas. Nosso compromisso é criar soluções personalizadas que não apenas atendam, mas superem as expectativas de nossos clientes. Valorizamos a comunicação aberta e constante, buscando entender profundamente as demandas individuais, para que possamos oferecer não apenas um serviço, mas uma parceria verdadeira e satisfatória. Na busca pela excelência, a voz do cliente é nossa bússola, guiando-nos para proporcionar experiências que transcendem as expectativas.</p>
        <ThemeProvider theme={theme}>
          <Button
            variant="outlined"
            color="primary"
            href="/quem-somos"
          >
            Sobre nós
          </Button>

        </ThemeProvider>

      </hgroup>
      <img src="/about.jpg" alt="About us" />

    </Component>
  )
}