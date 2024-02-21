import styled from "styled-components"

export const Component = styled.div`
  hgroup {
    display: flex;
    flex-direction: column;
    padding: 5%;
    border-radius: 15px;
    margin-left: -10%; /* Ajuste conforme necessário */
    gap: 1rem;
    max-width: 550px; /* Limita a largura máxima */
    background-color: #393972;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px 0px,
      rgba(0, 0, 0, 0.19) 0px 5px 10px 0px;

    h2 {
      color: var(--gradient-orange);
    }

    p {
      color: #fff;
      text-align: justify;
    }
    button {
      width: 150px;
    }

    @media screen and (max-width: 600px) {
      width: 100% !important;
      margin: 0;
    }
  }
`
