import { GlobalStyle } from "../styles/GlobalStyles";
import Navbar from "../components/menu/Nav";
import { Footer } from "../components/footer";
import { Helmet } from "react-helmet";
import Slider from "./slyder";
import { Icon } from "../components/icon";
import Text from "./text";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Finzetto Cybersecurity - Quem Somos</title>
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <Slider />
      <Text />
      <Icon />
      <Footer />
    </>
  )




}