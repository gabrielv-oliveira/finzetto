import { Component } from "./styled";

export default function Slider() {


  return (
    <Component>
      <hgroup>
        <h1>Quem Somos</h1>
        <span class="material-symbols-outlined">
          keyboard_arrow_down
        </span>
      </hgroup>


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