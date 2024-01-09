import { Reasons } from "./Items";
import { Component } from "./style";
import cardsData from '../../data/cards.json';

export function Hide() {
  const data = cardsData.hide;
  return (
    <Component>
      <ul>
        <h1>Por que nos <strong>contratar?</strong></h1>
        {data.map((card, index) => (
          <Reasons
            key={index}
            id={card.id}
            title={card.title}
            reason={card.content}
          />
        ))}
      </ul>

    </Component>
  )
}