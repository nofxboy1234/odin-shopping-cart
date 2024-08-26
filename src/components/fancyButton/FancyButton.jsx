import PropTypes from 'prop-types';
import styled from 'styled-components';

const FancyButton = styled.button`
  background: ${(props) => (props.$primary ? '#bf4f74' : 'white')};
  color: ${(props) => (props.$primary ? 'white' : '#bf4f74')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

const TomatoButton = styled(FancyButton)`
  color: tomato;
  border-color: tomato;

  background: ${(props) => {
    return props.$primary ? 'tomato' : 'white';
  }};
  color: ${(props) => (props.$primary ? 'white' : 'tomato')};
`;

FancyButton.defaultProps = {
  $primary: false,
};

FancyButton.propTypes = {
  $primary: PropTypes.bool,
};

TomatoButton.defaultProps = {
  $primary: false,
};

TomatoButton.propTypes = {
  $primary: PropTypes.bool,
};

export default FancyButton;
export { TomatoButton };
// export { FancyButton as default, TomatoButton };
