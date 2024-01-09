import styled, { keyframes } from 'styled-components';

export const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  background-color: var(--neutral-gray);
  display: inline-block;
  width: 80px;
  height: 80px;
`;

export const DualRing = styled.div`
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid var(--primary-blue);
    border-color: var(--primary-blue) transparent var(--primary-blue) transparent;
    animation: ${spinAnimation} 1.2s linear infinite;
  }
`;


