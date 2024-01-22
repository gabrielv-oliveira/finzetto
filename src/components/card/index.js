import React from 'react';
import cardsData from '../../data/cards.json';
import { Itens } from "./itens";
import { Card } from "./styles";

export function Cards() {
  const data = cardsData.cards;

  return (
    <Card data-aos="fade-up">
      {data.slice().reverse().map((card, index) => (
        <Itens
          key={index}
          icon={card.icon}
          title={card.titulo}
          desc={card.texto}
        />
      ))}
    </Card>
  )
}
