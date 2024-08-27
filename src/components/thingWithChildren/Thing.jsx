import styled from 'styled-components';

const Thing = styled.div`
  color: blue;

  button {
    color: inherit;
  }

  .something {
    border: 1px solid; // an element labeled ".something" inside <Thing>
    display: block;
  }
`;

export default Thing;
