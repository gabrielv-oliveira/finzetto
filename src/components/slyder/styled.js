import styled from "styled-components";

export const Component = styled.div`

  padding: 1rem 1rem 3rem 1rem;
  position: relative;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-evenly;
  background: url(/back.jpg) no-repeat fixed center ;


  hgroup {
    z-index: 1;
    display: flex;
    flex-direction: column;

    gap: 1.5rem;
    width: 450px;

    h1 {
      color: var(--primary-blue);
      font-weight: 900;
      font-size: 45px;
      text-shadow: 2px 2px #558ABB;
     
    }
    .topTitle{
       margin-bottom: -47px;
    }

    p {
      line-break: auto;
      color: #fff;
      font-size: 18px ;
      padding: 13px 0;
    }
  }

  button{
    width: 150px;
    padding: 0.5rem 1rem;
    color: #363636;
    font-weight: bolder;
    display: flex;
    gap: 5px;

    i{
      color: #363636;
      font-size: 1.1rem;
    }
    :hover{
      color: #fff;
      i{
        color: #fff;
      }
    }
  }

  .img {
    width: 350px;
    height: 300px;
    background-color: var(--primary-light-blue);
    margin-top: 10px;
    
  }
`;
