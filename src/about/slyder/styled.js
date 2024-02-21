import styled from "styled-components";

export const Component = styled.div`

  padding: 5rem 1rem 3rem 1rem;
  position: relative;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-evenly;

  hgroup{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
    color: #fff;
    font-size: 70px;
    text-align: center;
  }

  span{
    color: #fff;
    border: 2px solid #fff;
    border-radius: 50%;
    font-size: 35px;
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
  }}
 
 


  .video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1; 
}

.video-background {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}
`;
