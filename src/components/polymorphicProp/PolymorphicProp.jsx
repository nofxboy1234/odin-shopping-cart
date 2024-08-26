import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  display: block;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const ReversedButton = (props) => (
  <Button {...props}>{props.children.split('').reverse()}</Button>
);

ReversedButton.propTypes = {
  children: PropTypes.string,
};

export default Button;
export { TomatoButton, ReversedButton };
