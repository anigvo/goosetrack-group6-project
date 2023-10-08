import styled from 'styled-components';

export const LoaderPosition = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

export const SuspenseLoader = styled.div`
width: 100%;
height: calc(100vh - 360px);
display: flex;
  align-items: center;
  justify-content: center;
`