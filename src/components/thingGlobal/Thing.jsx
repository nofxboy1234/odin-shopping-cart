import styled, { createGlobalStyle } from 'styled-components';

const Thing = styled.div`
  && {
    color: blue;
  }
`;

const GlobalStyle = createGlobalStyle`
  div${Thing} {
    color: red;
  }
`;

export { Thing, GlobalStyle };
