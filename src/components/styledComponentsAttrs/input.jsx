import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input.attrs((props) => ({
  type: 'text',
  $size: props.$size || '1em',
}))`
  color: #bf4f74;
  font-size: 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;

  margin: ${(props) => props.$size};
  padding: ${(props) => props.$size};
`;

const PasswordInput = styled(Input).attrs({
  type: 'password',
})`
  border: 2px solid aqua;
`;

Input.propTypes = {
  $size: PropTypes.string,
};

export default Input;
export { PasswordInput };
