import { GlobalStyle } from "../styles/GlobalStyles";
import Navbar from "../components/menu/Nav";
import Slider from "../components/slyder";
import { Cards } from "../components/card";
import { Faq } from "../components/faq";



export default function Home() {

   return (
      <>
         <GlobalStyle />
         <Navbar />
         <Slider />
         <Cards />
         <Faq />
      </>



   )




}