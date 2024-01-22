import { Component } from "./styles";

export function Form() {
  return (
    <Component>
      <iframe
        title="Formulário de Contato"
        id="question"
        allowtransparency="true"
        allowfullscreen="true"
        allow="geolocation; microphone; camera"
        src="https://my.forms.app/form/656dd644a0dad23630ce7883"
        frameBorder="0"
        style={{
          width: "60vw",
          minWidth: '100%',
          height: '980px',
          border: 'none',
        }}
      ></iframe>
      <div formsappId="656dd644a0dad23630ce7883"></div>
    </Component>
  )
}