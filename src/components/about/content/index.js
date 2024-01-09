import { Component } from "./styles";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export function Content() {
  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#FFA904',
        darker: '#ED713C',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#F9FAFB',
      },
    },
  });
  return (
    <Component>
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
    </Component>
  )
}