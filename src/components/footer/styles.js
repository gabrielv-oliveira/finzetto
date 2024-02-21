import styled from "styled-components"

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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.3;
    content: "";
    position: absolute;
    filter: blur(100px);
  }

  .company {
    width: 200px;
    img {
      max-width: 100%;
    }

    p {
      text-align: justify;
      font-size: 0.7rem;
      color: rgba(255, 255, 255, 0.5);
    }
  }

  h2 {
    color: var(--primary-blue);
    margin-bottom: 15px;
  }
  .content {
    display: flex;
    justify-content: space-evenly;
    align-items: start;
    flex-wrap: wrap;

    .flex-center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5em;

      .contact {
        display: grid;
        row-gap: 0.5em;
        li {
          a {
            font-weight: 700;
            color: #fff;
          }
          a i {
            font-size: 20px;
            margin-right: 5px;
          }

          :hover {
            transform: scale(1.1);
            a {
              color: var(--primary-blue);
            }
          }
        }
      }

      .social {
        width: 100%;
        display: flex;
        justify-content: space-between;
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

  .copyright {
    display: flex;
    position: inherit;
    width: 100%;
    height: 2rem;
    padding-top: 3rem;

    p {
      color: var(--primary-blue);
      position: absolute;
      right: 0px;
      bottom: 0px;

      span {
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

  @media screen and (max-width: 850px) {
    width: 100%;
  }
`
