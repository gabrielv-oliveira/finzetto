import styled from "styled-components";

export const Card = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
position: relative;
gap: 2rem;
padding: 1rem;

 ::before {
    background-color: var(--primary-light-blue);
    width: 550px;
    height: 150px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
    position: absolute;
    z-index:-1;
    filter: blur(80px);
  }
`
