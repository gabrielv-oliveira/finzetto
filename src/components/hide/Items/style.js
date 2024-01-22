import styled from "styled-components"

export const Component = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: -15rem;
  padding: 1rem;
  width: 650px;
  background-color: rgba(var(--gradient-dark-purple), 0.2);
  border: 1px solid rgba(var(--neutral-light-rgb), 0.1);
  border-radius: 10px;

  transition: transform 0.3s ease-in-out;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 5px 10px 0 rgba(0, 0, 0, 0.19);

  position: relative;
  &:nth-child(2n-1) {
    margin-left: 0;
  }
  &:last-child {
    margin-left: 15rem;
  }

  h1 {
    position: absolute;
    color: rgba(255, 255, 255, 0.3) !important;
    top: 5px;
    font-size: 7rem !important;
  }
  section {
    height: 115px;
    display: flex;
    flex-direction: column;
    color: #fff;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 0;
    gap: 0.5rem;
    h2 {
      color: var(--gradient-orange);
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 !important;

    h1 {
      top: 21px;
    }
  }
`
