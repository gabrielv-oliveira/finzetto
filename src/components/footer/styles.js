import styled from "styled-components";

export const Component = styled.div`
  position: relative;
  overflow: hidden;
  padding: 1.2rem;
  margin-top: 2rem;

  ::before {
    background-color: var(--primary-light-blue);
    z-index: -1;
    width: 500px;
    height: 500px;
    top: 0;
    left: 500px;
    content: "";
    position: absolute;
    filter: blur(100px);
  }
  .content{
    display:flex;
    justify-content: space-around;
    align-items: center;

    .flex-center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5em;
  
      h2 {
        color: #fff;
      }
  
      .contact{
        display: grid;
        row-gap: 0.5em;
        li{
          
          a{
           font-size: 1.1rem;
           color: #fff;
          }
     
          i{
           font-size: 20px;
           margin-right: 5px;
          }
        }
      
      }
  
      .social{
        width: 100%;
        display: flex;
        justify-content: space-between ;
      }
      .icon-3d {
      font-size: 2rem;      
         color: #fff;
      &:hover {
        animation: icon3d-hover 200ms infinite; 
      }
    }
   
  
    }
  }

  .copyright{
    display: flex;
    position: inherit;
    width: 100%;
    height: 2rem;   

    p{
    color: var(--primary-blue);
    position: absolute;
    right: 0px;
    bottom: 0px;
    
    
    span{
      color: var(--primary-light-blue);
      font-weight: bolder;
    }
    }
  }

  @keyframes icon3d-hover {
    0% {
      text-shadow: 5px 4px var(--redColor), -5px -6px var(--blueColor);
    }
    25% {
      text-shadow: -5px -6px var(--redColor), 5px 4px var(--blueColor);
    }
    50% {
      text-shadow: 5px -4px var(--redColor), -8px 4px var(--blueColor);
    }
    75% {
      text-shadow: -8px -4px var(--redColor), -5px -4px var(--blueColor);
    }
    100% {
      text-shadow: -5px 0 var(--redColor), 5px -4px var(--blueColor);
    }
  }
`;
