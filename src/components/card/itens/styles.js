import styled from "styled-components";

export const Item = styled.div`
  background-color: rgba(var(--neutral-gray-rgb),0.6);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1;
  
  gap: 2rem;
  height: 308px;
  width: 289px;
  padding: 1rem;

  border: 1px solid rgba(var(--neutral-light-rgb),0.1);
  border-radius: 10px;
 
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 5px 10px 0 rgba(0, 0, 0, 0.19);

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transform: scale(1.1);
    span{
      transform: scale(1.3);
    }
  }

  span {
    background: linear-gradient(45deg, rgb(77 147 255), rgb(56 0 229));
    border-radius:50%;
    background-clip: text;
    
    padding: 0.5rem;
    margin-top: -75px;
    
    color: #fff;
    font-size: 2.5rem;
    font-weight: 700;
    transition: transform 0.4s ease-in-out;
    position: relative;
    z-index: 1;

      ::before {
    content: "";
    background-color: var(--primary-light-blue);
    width: 96px;
    height: 74px;
    top: 0px;
    left: -10px;
    position: absolute;
    border-radius: 50%;
    filter: blur(45px);
    z-index: -2;
  }
  }

  hgroup{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h2 {
      color: var(--gradient-orange);
      font-weight: bold;
      line-height: 1;
  
    }
  
    p {
      color: #fff;
      text-align: justify;
      letter-spacing: -1px;
    }
  }
`;
