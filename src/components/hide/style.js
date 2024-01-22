import styled from "styled-components";

export const Component = styled.div`
  
  margin-bottom: 1.5rem;

  ul{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0 10rem; 
  position: relative;
  
  ::before {
    background-color: var(--primary-light-blue);
    width: 100%; 
    height: 350px;
    border-radius: 50%;
    opacity: 0.7;
    content: "";
    position: absolute;
    z-index: -1;
    filter: blur(80px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

}

  

  h1 {
    font-size: 2rem; 
    text-align: center;
    color: #fff;
    padding-bottom: 1rem; 

    strong {
      background-image: linear-gradient(to right, #ff8a00, #e52e71);
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      text-transform: uppercase;
    }
  }

 

  @media screen and (max-width: 820px) {
    padding: 0 1rem; 
    width: 100%;
    h1 {
      font-size: 1.5rem; 
    }
  }
`;
