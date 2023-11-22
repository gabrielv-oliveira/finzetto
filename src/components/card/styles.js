import styled from "styled-components";

export const Card = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;

gap: 2rem;
padding: 1rem;

 ::before {
    background-color: var(--primary-light-blue);
    width: 550px;
    height: 150px;
    top: 500px;
    content: "";
    position: absolute;
    z-index:-1;
    filter: blur(80px);
  }
`
