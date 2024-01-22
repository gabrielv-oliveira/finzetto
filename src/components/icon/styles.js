import styled from "styled-components";

export const Component = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 55px;
  right: 95px;
  padding: 1rem;

  border-radius: 50%;
  z-index: 2;
  transition: all 0.6s ease;

  :hover {
    button {
      .whatsapp-ico {
        background-color: #128c7e;
      }
      p {
        display: block;
        animation: fadeInRight 0.6s ease;
      }
    }
  }

  .material-symbols-outlined {
    font-variation-settings:
      'FILL' 1,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24;
  }

  button {
    cursor: pointer;
    background-color: transparent !important;
    border: none !important;
    transition: background-color 0.4s linear;

    .whatsapp-ico {
      fill: white;
      width: 50px;
      height: 50px;
      padding: 3px;

      background-color: #25d366;
      border-radius: 50%;
      box-shadow: 1px 6px 24px 0 rgba(7, 94, 84, 0.24);
      position: fixed;

      bottom: 55px;
      right: 95px;
      z-index: 10;
      color: #fff;
      text-align: center;
      font-size: 40px;
    }
    p {
      display: none;
      background: #128c7e;
      color: #fff;
      border-radius: 5px;
      font-size: 20px;
      padding: 10px 17px 11px 11px;
      position: fixed;
      bottom: 55px;
      right: 130px;
      z-index: 10;
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: scale(0.01) translate(-50%, -50%);
    }
    to {
      opacity: 1;
      transform: scale(1) translate(0, 0);
    }
  }
`;
