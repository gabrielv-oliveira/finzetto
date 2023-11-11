import styled from "styled-components";

export const Component = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
  gap: 4rem;
  background-color: var(--primary-blue);
  margin-top: 65px;
  margin-bottom: 25px;
  position: relative;

  

  .safe{    
    position: relative;  
    img {
      max-width: 100%;
      width: 350px;
      transform: scaleX(-1);
      margin-top: -80px;
      animation: vertical-shaking 2s infinite;
    @keyframes vertical-shaking {
      0% {
        transform: translateY(0);
      }
      25% {
        transform: translateY(3px);
      }
      50% {
        transform: translateY(-3px);
      }
      75% {
        transform: translateY(3px);
      }
      100% {
        transform: translateY(0);
      }
    }
    }
    ::before {
    content: "";
    background-color: var(--primary-blue);
    animation: vertical-shaking 2s infinite;
    width: 500px;
    height: 250px;
    top: -80px;
    left: -80px;
    position: absolute;
    border-radius: 50%;
    filter: blur(30px);
  }
  }

  .tRight {
    display: flex;
    flex-direction: column;
    gap: 0.8em;
    width: 450px;
    z-index: 2;

    h2 {
      color: var(--gradient-blue);
      font-weight: bolder;
    }
  }
`;
