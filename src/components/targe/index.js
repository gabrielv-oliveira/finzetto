import { Button } from "@mui/material";
import React from 'react';
import { Component } from "./styles";



export function Targe() {

  return (
    <Component>
      <div className="safe" data-aos="fade-up">
        <img src="/safe.png" alt="Cofre" />
      </div>
      <div className="tRight" data-aos="fade-left">
        <h1>Não Fique Para Trás!</h1>
        <p>No mundo da cibersegurança, estar atualizado e protegido é essencial. Se você deseja proteger seu negócio contra ameaças digitais e melhorar sua postura de segurança, estamos aqui para ajudar.</p>
        <Button
          variant="contained"
          style={{ background: 'var(--accent-purple)', color: 'white' }}
          href="#contact"
        >
          Fale Conosco
        </Button>
      </div>
    </Component>
  );
}
