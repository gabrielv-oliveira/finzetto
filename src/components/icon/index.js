
import { Component } from "./styles";

export function Icon() {
  return (
    <Component>
      <button onClick={() => window.open("https://wa.me/5511982547993?text=Eu%20quero%20fazer%20um%20pentest", "_blank")}>
        <p>Fale Conosco</p>
        <i class="fa fa-whatsapp fa-4x whatsapp-ico"></i>
      </button>
    </Component>
  )
}
