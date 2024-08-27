import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.$inputColor || '#bf4f74'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

Input.propTypes = {
  $inputColor: PropTypes.string,
};

export default Input;
