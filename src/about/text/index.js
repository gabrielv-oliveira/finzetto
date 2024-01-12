import { Component } from "./styled";
import { Itens } from "../../components/card/itens";
import { Card } from "../../components/card/styles";
import cardsData from '../../data/cards.json';
import React, { useState, useEffect, useRef } from 'react';
import { Hide } from "../../components/hide";
export default function Text() {

  const data = cardsData.sections;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [circlePosition, setCirclePosition] = useState({ left: 0, top: 0 });
  const circleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.pageX - 30, y: e.pageY - 30 });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updateCirclePosition = () => {
      setCirclePosition({
        left: circlePosition.left + (mousePosition.x - circlePosition.left) / 6,
        top: circlePosition.top + (mousePosition.y - circlePosition.top) / 6,
      });
    };

    const intervalId = setInterval(updateCirclePosition, 20);

    return () => {
      clearInterval(intervalId);
    };
  }, [mousePosition, circlePosition]);

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.style.left = `${circlePosition.left}px`;
      circleRef.current.style.top = `${circlePosition.top}px`;
    }
  }, [circlePosition]);
  return (
    <Component>
      
 

      <Card id="card">
        {data.map((card, index) => (
          <Itens
            key={index}
            icon={card.icon}
            title={card.title}
            desc={card.content}
          />
        ))}
      </Card>

      <section>
        <p>Somos a <strong>Finzetto CyberSecurity</strong>, uma equipe dedicada e apaixonada por garantir a segurança digital em um mundo cada vez mais conectado. <strong>Nossa missão é proteger seus ativos digitais</strong>, fornecendo soluções inovadoras e abrangentes que defendem contra as ameaças cibernéticas em constante evolução.</p>

        <p>Na Finzetto, entendemos que a segurança da informação é uma prioridade crítica para organizações e indivíduos. Com anos de experiência e especialização em cibersegurança, oferecemos serviços e consultoria de alta qualidade para fortalecer as defesas contra ataques virtuais.</p>

        <p>Junte-se a nós na jornada para um ambiente digital mais seguro. Na Finzetto CyberSecurity, estamos prontos para enfrentar os desafios cibernéticos do presente e do futuro, protegendo o que mais importa para você.</p>
      </section>
      <Hide />
    </Component>
  )
}