import styled from "styled-components";

export const Component = styled.div`
display: flex !important;
flex-direction: column;
flex-wrap: wrap;
width: 100%;
justify-content: center;
text-align: center;

h1{
  text-align: center;
  color: transparent;
  background-image: linear-gradient(to right, rgb(255, 138, 0), rgb(229, 46, 113));
  background-clip: text;
  text-transform: uppercase;
}
  p{
      color: #fff;
      font-size: 1.2rem;
    }
`