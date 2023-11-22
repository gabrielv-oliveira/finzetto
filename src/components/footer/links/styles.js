import styled from "styled-components";

export const Component = styled.ul`

li{
  margin-bottom: 10px;

  a{
    color: #fff;
  }
  :hover{
    a{
      color: var(--primary-blue);
    }
    transform: scale(1.1);
  }
}

`
