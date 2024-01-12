import styled from "styled-components"

export const Component = styled.section`
 display: flex;
 flex-direction: column;
 justify-content: center;
 flex-wrap: wrap;
 padding: 1rem;
 text-align: justify;
 gap: 1.2rem;

section {

    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 3rem;
    align-items: center;
    p {
      font-size: 17px;
      width: 70%;
      color: #fff;
    }
 }

 #card {
    ::before {
      background-color: var(--primary-blue);
      opacity: 0.5;
    }
 }

 #cards {
    height: 255px;
    width: 262px;
    gap: 1rem;

    h2 {
      z-index: 5;
    }
    span {
      background: linear-gradient(45deg, rgb(77 229 255), rgb(0 229 166));
      ::before {
        background-color: var(--primary-blue);
      }
    }
 }
`;

