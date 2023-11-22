import styled from "styled-components";

export const Component = styled.details`
  background: var(--neutral-dark);
  width: 100%;
  max-width: 800px; /* Define uma largura máxima para evitar que fique muito largo */
  margin: 0 auto; /* Centraliza o componente na tela */
  margin-bottom: 5px;
  cursor: pointer;

  summary {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    color: rgba(255, 255, 255);
    background: linear-gradient(
      45deg,
      rgba(77, 161, 255, 0.6),
      rgba(0, 229, 188, 0.6) 75%
    );
    width: 100% !important;
    cursor: pointer;
    border-bottom: 1px solid rgba(var(--neutral-gray-rgb), 0.8);
    transition: transform 0.3s ease-in;

    span {
      color: rgba(0, 0, 0, 0.6);
      background: #fff;
      border-radius: 50%;
    }

    #expand {
      display: none;
    }
  }

  details[open] summary {
    transform: rotate(90deg);
  }

  p {
    padding: 16px;
    text-align: justify;
    color: #fff;
    font-size: 0.8rem;
  }

  @media screen and (max-width: 600px) {
       summary {
      align-items: flex-start;
    }
  }
`;
